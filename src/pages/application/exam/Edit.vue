<template>
  <q-dialog v-model="visible" persistent>
    <q-card style="width: 600px">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Edit Exam</div>
        <q-space />
        <q-btn @click="close" icon="close" flat round dense />
      </q-card-section>

      <q-card-section>
        <div class="col">
          <q-input label="Type" />
          <q-select label="Status" />
          <q-input label="Date">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer"></q-icon>
            </template>
          </q-input>
          <q-input type="textarea" rows="3" label="Remarks" />
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
      return this.$store.getters['application/editExamDialog']
    }
  },
  methods: {
    close () {
      this.$store.commit('application/closeDialogs')
    }
  }
}
</script>
