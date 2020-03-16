<template>
  <q-dialog v-model="visible" persistent>
    <q-card style="width: 600px">
       <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Edit Other Information</div>
        <q-space />
        <q-btn @click="close" icon="close" flat round dense />
      </q-card-section>

      <q-card-section>
        <div class="q-gutter-lg">
          <q-select label="Tax Code" />
          <q-select label="Civil Status" />
          <q-input label="Citizenship" />
          <q-input label="Religion" />
          <q-input label="Height" />
          <q-input label="Weight" />
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
      return this.$store.getters['applicant/editOtherDialog']
    }
  },
  methods: {
    close () {
      this.$store.commit('applicant/closeDialogs')
    }
  }
}
</script>
