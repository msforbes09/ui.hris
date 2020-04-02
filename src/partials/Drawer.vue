<template>
  <q-drawer v-model="drawer" show-if-above bordered content-class="bg-grey-1">
    <q-scroll-area class="fit">
      <q-img
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">{{user.name}}</div>
          <div>{{user.branch.name}} | {{user.user_type.name}}</div>
        </div>
      </q-img>

      <q-list>
        <q-item
          v-for="(route, i) in routes"
          :key="i"
          v-bind="route"
          clickable
          :to="route.path"
        >
          <q-item-section v-if="route.icon" avatar>
            <q-icon :name="route.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ route.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.getters['app/drawer']
      },
      set(arg) {
        this.$store.commit('app/drawer', arg)
      }
    },
    user () {
      return this.$store.getters['auth/user']
    }
  },
  data: () => ({
    routes: [
      {
        title: 'Applicants',
        icon: 'link',
        path: '/applicants/dashboard'
      },
      {
        title: 'Clients',
        icon: 'link',
        path: '/clients'
      },
      {
        title: 'Keywords',
        icon: 'link',
        path: '/keywords'
      },
      {
        title: 'Users',
        icon: 'link',
        path: '/users'
      },
      {
        title: 'Requirement Templates',
        icon: 'link',
        path: '/requirement-templates'
      }
    ]
  })
}
</script>

<style></style>
