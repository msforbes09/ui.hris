<template>
  <q-dialog v-model="visible" persistent>
    <q-card style="width: 600px">
       <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Edit Basic Information</div>
        <q-space />
        <q-btn @click="close" icon="close" flat round dense />
      </q-card-section>

      <q-card-section>
        <div class="q-gutter-lg">
          <q-input label="Last Name" />
          <q-input label="First Name" />
          <q-input label="Middle Name" />
          <q-input label="Email" />
          <q-input label="Contact #" />
          <q-input label="Current Address" />
          <q-input label="Permanent Address" />
          <q-input label="Nickname" />
          <q-input label="Birth Date" mask="date" />
          <q-input label="Birth Place" />
          <q-select label="Gender" />
        </div>
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
      return this.$store.getters['applicant/editBasicDialog']
    }
  },
  methods: {
    close () {
      this.$store.commit('applicant/closeDialogs')
    }
  }
}
</script>
