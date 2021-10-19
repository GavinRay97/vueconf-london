<script setup lang="ts">
import { useSubscription as useUrqlSubscription } from "@urql/vue"
import { gql } from "~/gql"

// AllUsersQuery is a fully typed document node
const AllUsersQuery = gql(/* GraphQL */ `
  subscription AllUsersSubscription {
    user {
      id
      email
    }
  }
`)

const { data, error } = useUrqlSubscription({ query: AllUsersQuery })
</script>

<template>
  <h1>Vue.js London - Let's Build Stuff [Urql Page]</h1>

  <!-- Still loading -->
  <section v-if="!data">
    <p>Loading...</p>
  </section>

  <!-- Server returned an error for query -->
  <section v-else-if="error">
    <p>Error: {{ error.message }}</p>
  </section>

  <!-- We have data now -->
  <section v-else-if="data">
    <Table :data="data.user" />
  </section>

  <!-- The universe has imploded. How did we get here? -->
  <section v-else>
    <p>
      If you can reproducibly wind up here, please send a message to the
      developers.
    </p>
  </section>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
