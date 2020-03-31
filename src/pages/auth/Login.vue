<template>
  <q-card style="width: 600px">
    <q-card-section>
      <div class="text-h6">Sign In</div>
    </q-card-section>

    <q-form @keydown="error.clear($event.target.name)" @submit="login">
      <q-card-section class="q-gutter-md">
        <q-input
          name="username"
          v-model="username"
          outlined
          label="Username | Email"
          :error="error.has('username')"
          :error-message="error.get('username')"
        />

        <q-input
          name="password"
          v-model="password"
          outlined
          label="Password"
          type="password"
          :error="error.has('password')"
          :error-message="error.get('password')"
        />
      </q-card-section>

      <q-card-actions>
        <q-btn flat :to="{ name: 'forgotPassword' }" label="Forgot Password" />

        <q-space></q-space>

        <q-btn type="submit" label="Sign In" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
export default {
  data: () => ({
    username: '',
    password: ''
  }),
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  methods: {
    login() {
      this.$q.loading.show({
        message: "Verifying Credentials..."
      })

      this.$store.dispatch('auth/login', {username: this.username, password: this.password})
        .then(() => this.$router.push({
          [this.$route.query.redirect ? 'path' : 'name']
            : this.$route.query.redirect ?? 'applicantDashboard'
        }))
        .finally(() => this.$q.loading.hide())
    }
  },
  destroyed () {
    this.error.reset()
  }
}
</script>

<style></style>
