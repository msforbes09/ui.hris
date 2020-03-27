<template>
  <q-card style="width: 600px">
    <q-card-section>
      <div class="text-h6">Reset Password</div>
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

        <q-input
          name="password"
          type="password"
          outlined
          v-model="password"
          label="New Password"
          :error="error.has('password')"
          :error-message="error.get('password')"
        />

        <q-input
          name="confirmPassword"
          type="password"
          outlined
          v-model="confirmPassword"
          label="Confirm Password"
          :error="error.has('confirmPassword')"
          :error-message="error.get('confirmPassword')"
        />
      </q-card-section>

      <q-card-actions>
        <q-btn flat label="Back To Sign In" @click="back" />
        <q-space />
        <q-btn type="submit" label="Submit" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
    confirmPassword: '',
    token: ''
  }),
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  mounted () {
    this.email = this.$route.params.email
    this.token = this.$route.params.token
  },
  methods: {
    back () {
      this.$router.push({ name: 'login' })
    },
    submit () {
      this.$store.commit('isLoading', true)
      this.$store.dispatch('auth/resetPassword',
        {
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
          token: this.token
        })
        .then(() => this.$store.commit('auth/showSuccess', 'Password reset successfully.'))
        .finally(() => this.$store.commit('isLoading', false))
    }
  },
  destroyed () {
    this.error.reset()
  }
}
</script>

<style></style>
