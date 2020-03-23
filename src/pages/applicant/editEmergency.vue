<template>
  <q-dialog v-model="visible" persistent>
    <q-card style="width: 600px">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Edit Emergency Contact</div>
        <q-space />
        <q-btn @click="close" icon="close" flat round dense />
      </q-card-section>

      <q-card-section>
        <q-input label="Name" />
        <q-input label="Relationship" />
        <q-input label="Address" />
        <q-input label="Contact #" />
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
      return this.$store.getters['applicant/editEmergencyDialog']
    }
  },
  methods: {
    close () {
      this.$store.commit('applicant/closeDialogs')
    }
  }
}
</script>
