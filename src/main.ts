// register vue composition api globally
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client/core"
import { WebSocketLink } from "@apollo/client/link/ws"
import { getMainDefinition } from "@apollo/client/utilities"
import urql, {
  createClient,
  defaultExchanges,
  subscriptionExchange,
} from "@urql/vue"
import { DefaultApolloClient } from "@vue/apollo-composable"
import { createClient as createWSClient } from "graphql-ws"
import { createPinia } from "pinia"
import { defaultPlugins, handleSubscriptions, useClient } from "villus"
import routes from "virtual:generated-pages"
// windicss layers
import "virtual:windi-base.css"
import "virtual:windi-components.css"
import "virtual:windi-utilities.css"
import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import { store as vuexStore } from "~/store/vuex"
import App from "./App.vue"
import { GRAPHQL_ENDPOINT } from "./constants"
import "./styles/main.css"

const app = createApp(App)

// Pinia registration
app.use(createPinia())

// Vuex registration
app.use(vuexStore)

// Apollo Client registration
const httpLink = new HttpLink({
  uri: "http://" + GRAPHQL_ENDPOINT,
})

const wsLink = new WebSocketLink({
  uri: "ws://" + GRAPHQL_ENDPOINT,
  options: {
    reconnect: true,
    lazy: true,
  },
})

const combinedHttpAndWebsocketLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    )
  },
  wsLink,
  httpLink
)

const apolloClient = new ApolloClient({
  link: combinedHttpAndWebsocketLink,
  cache: new InMemoryCache(),
})

app.provide(DefaultApolloClient, apolloClient)

// graphql-ws client: Used across Urql/Villus etc for Subscription functionality
const wsClient = createWSClient({ url: "ws://" + GRAPHQL_ENDPOINT })

// Villus Client Registration
const villusClient = useClient({
  url: "http://" + GRAPHQL_ENDPOINT,
  use: [
    ...defaultPlugins(),
    handleSubscriptions((operation) => ({
      subscribe: (obs) => {
        wsClient.subscribe({ query: operation.query as any }, obs as any)
      },
    })),
  ],
})
app.use(villusClient)

// Urql Client Registration
const urqlClient = createClient({
  url: "http://" + GRAPHQL_ENDPOINT,
  // https://formidable.com/open-source/urql/docs/api/core/#client
  // Hides "__typename" field from query responses
  maskTypename: true,
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: (operation) => ({
        subscribe: (sink) => ({
          unsubscribe: wsClient.subscribe(operation, sink as any),
        }),
      }),
    }),
  ],
})
app.use(urql, urqlClient)

// Router registration
const router = createRouter({
  history: createWebHistory(),
  routes,
})
app.use(router)

app.mount("#app")
