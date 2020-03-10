<template>
  <q-card style="width: 600px">
    <q-card-section>
      <div class="text-h6">Forgot Password</div>
    </q-card-section>

    <q-card-section class="q-gutter-md">
      <q-input outlined label="Email" />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn label="Submit" @click="send" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  methods: {
    send() {
      this.$store.commit('auth/showSuccess', 'Password reset email sent.')
    }
  }
}
</script>

<style></style>
