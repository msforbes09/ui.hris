<template>
  <q-dialog v-model="visible" persistent>
    <q-card style="width: 600px">

      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Filter Applicants</div>
        <q-space />
        <q-btn @click="close" icon="close" flat round dense />
      </q-card-section>

      <q-card-section>
          <q-select multiple label="Branches" />
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-select multiple label="Client Branches" />
        <q-select multiple label="Client Positions" />
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-select multiple label="Status" />
      </q-card-section>

      <q-separator />

      <q-card-section>
        Date Applied
        <div class="row justify-between">
          <q-input label="From">
            <template v-slot:append>
              <q-icon name="event"></q-icon>
            </template>
          </q-input>
          <q-input label="To">
            <template v-slot:append>
              <q-icon name="event"></q-icon>
            </template>
          </q-input>
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
      return this.$store.getters['applicant/filterDialog']
    }
  },
  methods: {
    close () {
      this.$store.commit('applicant/closeDialogs')
    }
  }
}
</script>
