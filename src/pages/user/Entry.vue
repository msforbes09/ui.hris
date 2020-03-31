<template>
  <layout>
    <q-page padding>
      <div class="row q-mb-lg">

        <div class="col">
          <div class="text-h4">Users</div>
          <div class="text-caption">User Management</div>
        </div>

      </div>

      <div class="row">
        <q-btn @click="create">Create User</q-btn>
      </div>

      <q-card class="q-mt-xl">
        <q-tabs align="left">
          <q-route-tab label="Users" :to="{ name: 'users' }" />
          <q-route-tab label="User Types" :to="{ name: 'users' }" />
        </q-tabs>

        <q-separator />

        <q-card-section>
          <router-view />
        </q-card-section>
      </q-card>
    </q-page>

    <create-dialog />
    <edit-dialog />
  </layout>
</template>

<script>
export default {
  components: {
    layout: () => import('layouts/MainLayout.vue'),
    createDialog: () => import('./Create'),
    editDialog: () => import('./Edit')
  },
  mounted () {
    this.$store.dispatch('user/tools')
  },
  methods: {
    create () {
      this.$store.commit('user/create')
    }
  }
}
</script>

<style></style>
