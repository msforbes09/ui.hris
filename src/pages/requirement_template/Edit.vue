<template>
  <q-dialog v-model="visible" persistent>
    <q-card style="width: 600px">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Edit Template</div>
        <q-space />
        <q-btn @click="close" icon="close" flat round dense />
      </q-card-section>

      <q-card-section>
        <div class="col">
          <q-input label="Description" />
        </div>
      </q-card-section>

      <q-card-section>
        <q-input label="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-scroll-area style="height: 200px;">
          <div v-for="item in 50" :key="item">
            <q-checkbox :label="'Requirement Template ' + item" v-model="val" />
          </div>
        </q-scroll-area>
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
      return this.$store.getters['requirement_template/editDialog']
    }
  },
  methods: {
    close () {
      this.$store.commit('requirement_template/closeDialogs')
    }
  }
}
</script>
