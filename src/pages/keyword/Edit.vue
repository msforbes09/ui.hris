<template>
  <q-dialog v-model="visible" persistent>
    <q-card style="width: 600px">

      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Edit Keyword Value</div>
        <q-space />
        <q-btn @click="close" icon="close" flat round dense />
      </q-card-section>

      <q-card-section>
          <q-input outlined v-model="value" label="Keyword Value" />
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
      return this.$store.getters['keyword/editDialog']
    }
  },
  methods: {
    close () {
      this.$store.commit('keyword/closeDialogs')
    }
  }
}
</script>
