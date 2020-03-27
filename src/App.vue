<template>
  <div id="q-app">
    <router-view v-show="!visible"/>
    <q-inner-loading :showing="visible">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    visible () {
      return this.$store.getters['loading']
    }
  }
}
</script>
