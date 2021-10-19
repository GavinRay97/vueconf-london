<script setup lang="ts">
import { useSubscription } from "@vue/apollo-composable"
import { gql } from "~/gql"
import { useAllUsersSubscriptionSubscription as useAllUsersSubscription } from "~/vue-apollo-composition-api-generated"

////////////////////////////////////////////////////////////
// FIRST EXAMPLE
//
//  Using graphql-codegen "TypedDocumentNode"
//  w/ regular "useSubscription()" fn from Apollo
///////////////////////////////////////////////////////////
const AllUsersQuery = gql(/* GraphQL */ `
  subscription AllUsersSubscription {
    user {
      id
      email
    }
  }
`)

const {
  loading: firstLoading,
  result: firstData,
  error: firstError,
  onResult: firstOnResult,
} = useSubscription(AllUsersQuery)

firstOnResult((result) => {
  console.log(
    "[TypedDocumentNode, plain useSubscription] Got subscription result:"
  )
  console.log(result)
})

////////////////////////////////////////////////////////////
// SECOND EXAMPLE
//
//  Using graphql-codegen "Vue Apollo Composition API"
//  w/ individual, specially-generated subscription fn's
///////////////////////////////////////////////////////////

const {
  loading: secondLoading,
  result: secondData,
  error: secondError,
  onResult: secondOnResult,
} = useAllUsersSubscription()

secondOnResult((result) => {
  console.log("[Generated useAllUsersSubscription] Got subscription result:")
})
</script>

<template>
  <h1>Vue.js London - Let's Build Stuff [Apollo Subscription Page]</h1>

  <br />

  <h2>First Example - TypedDocumentNode</h2>
  <!-- Still loading -->
  <section v-if="firstLoading">
    <p>Loading...</p>
  </section>
  <!-- Server returned an error for query -->
  <section v-else-if="firstError">
    <p>Error: {{ firstError }}</p>
  </section>
  <!-- We have data now -->
  <section v-else-if="firstData">
    <Table :data="firstData.user" />
  </section>
  <!-- The universe has imploded. How did we get here? -->
  <section v-else>
    <p>
      If you can reproducibly wind up here, please send a message to the
      developers.
    </p>
  </section>

  <br />

  <h2>
    Second Example - Operation-specific Generated Vue Apollo Composition API
  </h2>
  <!-- Still loading -->
  <section v-if="secondLoading">
    <p>Loading...</p>
  </section>
  <!-- Server returned an error for query -->
  <section v-else-if="secondError">
    <p>Error: {{ secondError }}</p>
  </section>
  <!-- We have data now -->
  <section v-else-if="secondData">
    <Table :data="secondData.user" />
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
