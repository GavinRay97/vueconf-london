<script setup lang="ts">
interface Props {
  data: Record<string, unknown>[]
}

defineProps<Props>()
</script>

<template>
  <table class="container mx-auto">
    <tr>
      <th v-for="column in new Set(data.flatMap(Object.keys))">
        {{ column }}
      </th>
    </tr>

    <tr v-for="entry in data">
      <td v-for="key in entry">
        {{ key }}
      </td>
    </tr>
  </table>
</template>
