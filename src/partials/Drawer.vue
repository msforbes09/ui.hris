<template>
  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    bordered
    content-class="bg-grey-1"
  >
    <q-scroll-area class="fit">
      <q-img
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
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
  data: () => ({
    leftDrawerOpen: false,
    routes: [
      {
        title: 'Link 1',
        icon: 'link',
        path: '#'
      },
      {
        title: 'Link 2',
        icon: 'link',
        path: '#'
      },
      {
        title: 'Link 3',
        icon: 'link',
        path: '#'
      },
      {
        title: 'Link 4',
        icon: 'link',
        path: '#'
      }
    ]
  })
}
</script>

<style></style>
