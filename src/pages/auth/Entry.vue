<template>
  <layout>
    <q-page class="flex flex-center">
      <router-view />
    </q-page>

    <success />
  </layout>
</template>

<script>
export default {
  components: {
    layout: () => import('layouts/AuthLayout'),
    success: () => import('./Success')
  }
}
</script>

<style></style>
