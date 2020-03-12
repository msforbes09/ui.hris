<template>
  <layout>
    <q-page class="flex">
      <router-view />
    </q-page>

  </layout>
</template>

<script>
export default {
  components: {
    layout: () => import('layouts/MainLayout'),
  }
}
</script>

<style></style>
