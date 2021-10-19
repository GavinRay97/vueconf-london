<script setup lang="ts">
import { useQuery as useVillusQuery } from "villus"
import { gql } from "~/gql"

// AllUsersQuery is a fully typed document node
const AllUsersQuery = gql(/* GraphQL */ `
  query AllUsers {
    user {
      id
      email
    }
  }
`)

const { data, error, isFetching } = useVillusQuery({ query: AllUsersQuery })
</script>

<template>
  <h1>Vue.js London - Let's Build Stuff [Villus Page]</h1>

  <!-- Still loading -->
  <section v-if="isFetching">
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
