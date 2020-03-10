<template>
  <q-layout view="hHh LpR lFr">
    <toolbar />
    <drawer />

    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  components: {
    drawer: () => import('../partials/Drawer'),
    toolbar: () => import('../partials/Toolbar')
  }
}
</script>
