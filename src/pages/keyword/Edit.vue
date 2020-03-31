<template>
  <q-dialog v-model="visible" persistent>
    <q-card style="width: 600px">

      <q-form @keydown="error.clear($event.target.name)" @submit.prevent="update">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Edit Keyword Value</div>
          <q-space />
          <q-btn @click="close" icon="close" flat round dense />
        </q-card-section>

        <q-card-section>
            <q-input
              name="value"
              outlined
              v-model="value"
              label="Keyword Value"
              :error="error.has('value')"
              :error-message="error.get('value')" />
        </q-card-section>

        <q-card-actions>
          <q-space />
          <q-btn type="submit">Submit</q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data: () => ({
    value: ''
  }),
  computed: {
    visible () {
      return this.$store.getters['keyword/editDialog']
    },
    error() {
      return this.$store.getters.error
    }
  },
  methods: {
    update () {
      this.$store.dispatch('keyword/update', {value: this.value})
        .then(() => this.close())
    },
    close () {
      this.$store.commit('keyword/closeDialogs')
      this.error.reset()
    }
  },
  watch: {
    visible (state) {
      if(state) {
        this.value = this.$store.getters['keyword/value'].value
      }
    }
  }
}
</script>
