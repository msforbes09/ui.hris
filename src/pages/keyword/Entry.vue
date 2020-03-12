<template>
  <layout>
    <q-page class="flex">
      <router-view />
    </q-page>

    <form-dialog />
    <confirm-dialog />
  </layout>
</template>

<script>
export default {
  components: {
    layout: () => import('layouts/MainLayout'),
    formDialog: () => import('./FormDialog'),
    confirmDialog: () => import('./ConfirmDialog')
  }
}
</script>

<style></style>
