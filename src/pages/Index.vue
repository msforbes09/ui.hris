<template>
  <layout>
    <q-page class="flex flex-center">
      <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
    </q-page>
  </layout>
</template>

<script>
export default {
  components: {
    layout: () => import('layouts/MainLayout.vue')
  }
}
</script>
