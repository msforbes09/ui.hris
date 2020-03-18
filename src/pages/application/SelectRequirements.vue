<template>
  <q-dialog v-model="visible" persistent>
    <q-card style="width: 600px">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Select Requirements</div>
        <q-space />
        <q-btn @click="close" icon="close" flat round dense />
      </q-card-section>

      <q-card-section>
        <q-select label="Select Template"/>
      </q-card-section>

      <q-card-section>
        <q-input label="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <div class="col">
          <div class="row" v-for="item in 5" :key="item">
            <q-checkbox v-model="val" :label="'Requirement ' + item"/>
          </div>
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
  data: () => ({
    val: false
  }),
  computed: {
    visible () {
      return this.$store.getters['application/selectRequirementsDialog']
    }
  },
  methods: {
    close () {
      this.$store.commit('application/closeDialogs')
    }
  }
}
</script>
