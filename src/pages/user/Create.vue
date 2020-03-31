<template>
  <q-dialog v-model="visible" persistent>
    <q-card style="width: 600px">

      <q-form
        @keydown="error.clear($event.target.name)"
        @submit.prevent="store"
      >
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Create User</div>
          <q-space />
          <q-btn @click="close" icon="close" flat round dense />
        </q-card-section>

        <q-card-section>
            <q-input
              name="name"
              outlined
              v-model="name"
              label="Name"
              :error="error.has('name')"
              :error-message="error.get('name')" />

              <q-input
              name="username"
              outlined
              v-model="username"
              label="Username"
              :error="error.has('username')"
              :error-message="error.get('username')" />

              <q-input
              name="email"
              outlined
              v-model="email"
              label="Email"
              :error="error.has('email')"
              :error-message="error.get('email')" />


              <q-select
              name="branch_id"
              outlined
              v-model="branch"
              label="Branch"
              use-input
              bottom-slots
              @filter="(val, update) => update(() => userTypeFilter = val, (ref) => error.clear(ref.name))"
              :options="branches"
              option-label="name"
              :error="error.has('branch_id')"
              :error-message="error.get('branch_id')">
                <template v-if="branch" v-slot:append>
                  <q-icon name="cancel" @click.stop="branch = null" class="cursor-pointer" />
                </template>

                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>

              <q-select
              name="user_type_id"
              outlined
              v-model="userType"
              label="User Type"
              use-input
              bottom-slots
              @filter="(val, update) => update(() => userTypeFilter = val, (ref) => error.clear(ref.name))"
              :options="userTypes"
              option-label="name"
              :error="error.has('user_type_id')"
              :error-message="error.get('user_type_id')">
                <template v-if="userType" v-slot:append>
                  <q-icon name="cancel" @click.stop="userType = null" class="cursor-pointer" />
                </template>
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>

              <q-file
              name="avatar"
              outlined
              v-model="avatar"
              label="Avatar"
              :error="error.has('avatar')"
              :error-message="error.get('avatar')" />
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
    name: '',
    username: '',
    email: '',
    avatar: null,
    userType: null,
    userTypeFilter: '',
    branch: null,
    branchFilter: ''
  }),
  computed: {
    visible () {
      return this.$store.getters['user/createDialog']
    },
    error () {
      return this.$store.getters.error
    },
    branches () {
      try {
        return this.$store.getters['user/tools'].branches
          .filter(v => v.name.toLowerCase().indexOf(this.branchFilter) > -1)
      } catch (error) {}

      return []
    },
    userTypes () {
      try {
        return this.$store.getters['user/tools'].user_types
          .filter(v => v.name.toLowerCase().indexOf(this.userTypeFilter) > -1)
      } catch (error) {}

      return []
    }
  },
  methods: {
    store () {
      this.$q.loading.show()
      this.$store.dispatch('user/store', {
        name: this.name,
        username: this.username,
        email: this.email,
        user_type_id: this.userTypeId(),
        branch_id: this.branchId(),
        avatar_file: this.avatar
      })
      .then(() => this.close())
      .finally(() => this.$q.loading.hide())
    },
    userTypeId () {
      if(this.userType != null) {
        if(this.userType.hasOwnProperty('id'))
          return this.userType.id
      }

      return null
    },
    branchId () {
      if(this.branch != null) {
        if(this.branch.hasOwnProperty('id'))
          return this.branch.id
      }

      return null
    },
    close () {
      this.$store.commit('user/closeDialogs')
      this.error.reset()
      this.name = ''
      this.username = ''
      this.email = ''
      this.avatar = null
      this.userType = null
      this.userTypeFilter = ''
      this.branch = null
      this.branchFilter = ''
    }
  }
}
</script>
