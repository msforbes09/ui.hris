<template>
  <q-dialog v-model="visible" persistent>
    <q-card class="q-mb-lg">
        <q-card-section>
          <div class="row">
            <div class="text-subtitle1">Create New Application</div>
            <q-space />
            <q-btn @click="close" icon="close" flat round dense />
          </div>
        </q-card-section>
        <q-card-section>
          <div class="row no-wrap q-gutter-sm justify-between">
            <div><q-input outlined label="Last Name" /></div>
            <div><q-input outlined label="First Name" /></div>
            <div><q-input outlined label="Middle Name" /></div>
          </div>
        </q-card-section>
        <q-card-actions>
          <div class="row full-width justify-center">
            <q-btn @click="checkSubmit">Create New Application</q-btn>
          </div>
        </q-card-actions>
      </q-card>
  </q-dialog>
</template>

<script>
export default {
  computed: {
    visible () {
      return this.$store.getters['applicant/checkDialog']
    }
  },
  methods: {
    checkSubmit () {
      this.close()
      this.$router.push('/applicants/existing')
    },
    close () {
      this.$store.commit('applicant/closeDialogs')
    }
  }
}
</script>
