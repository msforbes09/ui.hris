<template>
  <q-card style="width: 600px">
    <q-card-section>
      <div class="text-h6">Reset Password</div>
    </q-card-section>

    <q-card-section class="q-gutter-md">
      <q-input outlined label="Email" />

      <q-input outlined label="New Password" />

      <q-input outlined label="Confirm Password" />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn label="Submit" @click="reset" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  methods: {
    reset() {
      this.$store.commit('auth/showSuccess', 'Password reset successfully.')
    }
  }
}
</script>

<style></style>
