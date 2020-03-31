<template>
  <div class="q-pa-md">
    <q-table
      flat
      row-key="id"
      :data="users"
      :columns="columns"
      :filter="filter"
      :pagination="pagination"
       @request="getUsers"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:body-cell-name="props">
        <q-td :props="props" class="cursor-pointer text-bold text-blue">
          <span @click="edit(props.row.id)">{{ props.value }}</span>
        </q-td>
      </template>

      <template v-slot:body-cell-avatar="props">
        <q-td :props="props">
          <q-avatar size="35px" class="q-mb-sm">
            <img v-bind:src="rowAvatar(props.row)" />
          </q-avatar>
        </q-td>
      </template>

      <template v-slot:body-cell-active="props">
        <q-td :props="props">
          <q-icon v-if="props.row.active" name="check_circle_outline" size="35px" color="green" />
          <q-icon v-else name="cancel" size="35px" color="red" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    filter: '',
    columns: [
      {name: 'avatar', label: 'Avatar', field: 'avatar'},
      {name: 'name', label: 'Name', field: 'name'},
      {name: 'branch', label: 'Branch', field: 'branch', format: (val) => val.name},
      {name: 'active', label: 'Active', field: 'active'},
      {name: 'user_type', label: 'Type', field: 'user_type', format: (val) => val.name}
    ],
    pagination: {
      sortBy: 'id',
      sorting: 'desc',
      page: 1,
      rowsPerPage: 3,
      rowsNumber: 10
    }
  }),
  computed: {
    users () {
      return this.$store.getters['user/users']
    }
  },
  mounted () {
    this.getUsers({
      pagination: this.pagination,
      filters: {name: ''}
    })
  },
  methods: {
    getUsers (requestProp) {
      // let queryString = Object.keys(requestProp.pagination).map(key => key + '=' + requestProp.pagination[key]).join('&')

      this.$store.dispatch('user/all', 'limit=0')
    },
    edit(id) {
      this.$store.commit('user/setUser', id)
      this.$store.commit('user/edit')
    },
    rowAvatar (row) {
      return row.avatar ?? 'https://cdn.quasar.dev/img/boy-avatar.png'
    }
  }
}
</script>

<style></style>
