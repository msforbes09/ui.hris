<template>
  <q-dialog v-model="visible">
    <q-card style="width: 300px">

      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Confirmation</div>
      </q-card-section>

      <q-card-section>
        <p>Are you sure you want to delete?</p>
      </q-card-section>

      <q-card-actions>
        <q-space />
        <q-btn @click="close">Confirm</q-btn>
        <q-btn @click="close">Cancel</q-btn>
      </q-card-actions>

    </q-card>
  </q-dialog>
</template>

<script>
export default {
  computed: {
    visible () {
      return this.$store.getters['requirement_template/deleteDialog']
    }
  },
  methods: {
    close () {
      this.$store.commit('requirement_template/closeDialogs')
    }
  }
}
</script>
