<script setup lang="ts">
import { GRAPHQL_ENDPOINT } from "~/constants"

const state = reactive({
  fetching: false,
  errors: null as unknown,
  data: null,
})

async function fetchData() {
  try {
    state.fetching = true
    const request = await fetch("http://" + GRAPHQL_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        query: `
          query AllUsers {
            user {
              id
              email
            }
          }
        `,
      }),
    })
    const result = await request.json()
    Object.assign(state, result)
  } catch (error) {
    state.errors = JSON.stringify(error, null, 2)
  } finally {
    state.fetching = false
  }
}

onMounted(fetchData)
</script>

<template>
  <h1>Vue.js London - Let's Build Stuff [Fetch Page]</h1>

  <!-- Still loading -->
  <section v-if="state.fetching">
    <p>Loading...</p>
  </section>

  <!-- Server returned an error for query -->
  <section v-else-if="state.errors">
    <pre>Error: {{ JSON.stringify(state.errors, null, 2) }}</pre>
  </section>

  <!-- We have data now -->
  <section v-else-if="state.data">
    <Table :data="state.data['user']" />
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
