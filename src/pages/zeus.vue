<script setup lang="ts">
import { Gql } from "~/graphql-zeus-sdk/zeus"

const allUsersQuery = () =>
  Gql.query({
    user: [
      {},
      {
        id: true,
        email: true,
      },
    ],
  })

type AllUsersQueryResponse = Awaited<ReturnType<typeof allUsersQuery>>

const state = reactive({
  data: {} as AllUsersQueryResponse,
  errors: null as unknown,
  fetching: false,
})

async function fetchData() {
  try {
    state.fetching = true
    state.data = await allUsersQuery()
  } catch (error) {
    state.errors = JSON.stringify(error, null, 2)
  } finally {
    state.fetching = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <h1>Vue.js London - Let's Build Stuff [Zeus Page]</h1>

  <!-- Still loading -->
  <section v-if="state.fetching">
    <p>Loading...</p>
  </section>

  <!-- Server returned an error for query -->
  <section v-else-if="state.errors">
    <p>Error: {{ JSON.stringify(state.errors) }}</p>
  </section>

  <!-- We have data now -->
  <section v-else-if="state.data?.user">
    <Table :data="state.data.user" />
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
