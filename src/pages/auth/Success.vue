<template>
  <q-dialog v-model="show" persistent>
    <q-card style="width: 600px">
      <q-card-section>
        <div class="q-pa-md">
          <div align="center">
            <q-icon name="check" color="green" size="100px" />
          </div>

          <div align="center">
            {{ message }}
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn label="Back To Sign In" @click="back" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  computed: {
    show() {
      return this.$store.getters['auth/showSuccess']
    },
    message() {
      return this.$store.getters['auth/messageSuccess']
    }
  },
  methods: {
    back() {
      this.$store.commit('auth/hideSuccess')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style></style>
