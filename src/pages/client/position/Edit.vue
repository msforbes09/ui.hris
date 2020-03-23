<template>
  <q-dialog v-model="visible" persistent>
    <q-card style="width: 600px">

      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Edit Position</div>
        <q-space />
        <q-btn @click="close" icon="close" flat round dense />
      </q-card-section>

      <q-card-section>
          <q-input label="Code" />
          <q-input label="Name" />
      </q-card-section>

      <q-card-actions>
        <q-space />
        <q-btn>Submit</q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  computed: {
    visible () {
      return this.$store.getters['client/editPositionDialog']
    }
  },
  methods: {
    close () {
      this.$store.commit('client/closeDialogs')
    }
  }
}
</script>
