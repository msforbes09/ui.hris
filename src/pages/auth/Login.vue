<template>
  <q-card style="width: 600px">
    <q-card-section>
      <div class="text-h6">Sign In</div>
    </q-card-section>

    <q-card-section class="q-gutter-md">
      <q-input outlined label="Username or Email" />

      <q-input outlined label="Password" type="password" />
    </q-card-section>

    <q-card-actions>
      <q-btn flat :to="{ name: 'forgotPassword' }" label="Forgot Password" />

      <q-space></q-space>

      <q-btn @click="signin" label="Sign In" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  methods: {
    signin() {
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>

<style></style>
