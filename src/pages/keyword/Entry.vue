<template>
  <layout>
    <q-page class="flex">
      <router-view />
    </q-page>

    <create-dialog />
    <edit-dialog />
    <confirm-dialog />
  </layout>
</template>

<script>
export default {
  components: {
    layout: () => import('layouts/MainLayout'),
    createDialog: () => import('./Create'),
    editDialog: () => import('./Edit'),
    confirmDialog: () => import('./Delete')
  }
}
</script>

<style></style>
