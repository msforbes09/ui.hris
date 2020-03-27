<template>
  <layout>
    <q-page padding>
      <div class="text-h4">Users Management</div>

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
  </layout>
</template>

<script>
export default {
  components: {
    layout: () => import('layouts/MainLayout.vue')
  }
}
</script>

<style></style>
