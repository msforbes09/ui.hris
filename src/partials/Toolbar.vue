<template>
  <q-header elevated class="bg-white text-dark">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleDrawer"
      />

      <q-toolbar-title>Title </q-toolbar-title>

      <q-space></q-space>

      <q-btn label="Logout" @click="logout" />
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      this.$store.commit('app/drawer', !this.$store.getters['app/drawer'])
    },
    logout() {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style></style>
