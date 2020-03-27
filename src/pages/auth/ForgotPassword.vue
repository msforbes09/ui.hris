<template>
  <q-card style="width: 600px">
    <q-card-section>
      <div class="text-h6">Forgot Password</div>
    </q-card-section>

    <q-form @keydown="error.clear($event.target.name)" @submit="submit">
      <q-card-section class="q-gutter-md">
        <q-input
          name="email"
          outlined
          v-model="email"
          label="Email"
          :error="error.has('email')"
          :error-message="error.get('email')"
        />
      </q-card-section>

      <q-card-actions>
        <q-btn flat label="Back To Sign In" @click="back" />
        <q-space />
        <q-btn type="submit" label="Submit"/>
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
export default {
  data: () => ({
    email: ''
  }),
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  methods: {
    back () {
      this.$router.push({ name: 'login'})
    },
    submit () {
      this.$store.commit('isLoading', true)
      this.$store.dispatch('auth/forgetPassword', {email: this.email})
        .then(() => this.$store.commit('auth/showSuccess', 'Password reset email sent.'))
        .finally(() => this.$store.commit('isLoading', false))
    }
  },
  destroyed () {
    this.error.reset()
  }
}
</script>

<style></style>
