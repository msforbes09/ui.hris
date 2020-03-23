<template>
  <layout>
    <q-page class="flex">
      <router-view />
    </q-page>

    <edit-dialog />
    <create-branch-dialog />
    <edit-branch-dialog />
    <create-position-dialog />
    <edit-position-dialog />
    <delete-dialog />
  </layout>
</template>

<script>
export default {
  components: {
    layout: () => import('layouts/MainLayout'),
    editDialog: () => import('./Edit'),
    createBranchDialog: () => import('./branch/Create'),
    editBranchDialog: () => import('./branch/Edit'),
    createPositionDialog: () => import('./position/Create'),
    editPositionDialog: () => import('./position/Edit'),
    deleteDialog: () => import('./Delete')
  }
}
</script>

<style></style>
