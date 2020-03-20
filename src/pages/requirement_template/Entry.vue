<template>
  <layout>
    <q-page class="flex">
      <router-view />
    </q-page>

    <create-dialog />
    <edit-dialog />
    <delete-dialog />
  </layout>
</template>

<script>
export default {
  components: {
    layout: () => import('layouts/MainLayout'),
    createDialog: () => import('./Create'),
    editDialog: () => import('./Edit'),
    deleteDialog: () => import('./Delete')
  }
}
</script>

<style></style>
