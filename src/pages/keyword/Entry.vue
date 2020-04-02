<template>
  <layout>
    <q-page padding>
      <div class="row q-mb-lg">

        <div class="col">
          <div class="text-h4">Keywords</div>
          <div class="text-caption">Keyword Management</div>
        </div>

      </div>

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
