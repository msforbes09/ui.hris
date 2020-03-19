<template>
  <div class="full-width q-pa-lg">
    <div class="row q-mb-lg">
      <div class="col">
        <div class="text-h5">All Applicants</div>
        <div class="text-caption">
          <router-link to="/applicants/dashboard">Applicant Management</router-link>> All Applicants
        </div>
      </div>
    </div>

    <q-card>
      <q-card-section>
        <div class="row">
          <q-btn @click="check">New Application</q-btn>
          <q-space />
          <div class="row q-gutter-lg">
            <q-input outlined label="Search" icon="search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
            <q-btn @click="filter">Filter</q-btn>
          </div>
        </div>
      </q-card-section>
      <q-card-section>Filter: []</q-card-section>
      <q-card-section>
        <q-table flat :data="data" :columns="columns" row-key="id"></q-table>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    columns: [
      { field: row => row.name, label: 'Name', align: 'left'},
      { field: row => row.client_branch, label: 'Client/Branch', align: 'left'},
      { field: row => row.contact, label: 'Contact #', align: 'left'},
      { field: row => row.position, label: 'Position Applied', align: 'left'},
      { field: row => row.date_applied, label: 'Date Applied', align: 'left'},
      { field: row => row.status, label: 'Status', align: 'left'},
    ]
  }),
  computed: {
    data () {
      var d = [];

      for(var i=0;i<100;i++) {
        d.push({
          id: i,
          name: 'Dela Cruz, Juan',
          client_branch: 'SRI/Head Office',
          contact: '09876543210',
          position: 'Staff',
          date_applied: 'Mar 3, 2020',
          status: 'Deployed'
        })
      }

      return d;
    }
  },
  methods: {
    check () {
      this.$store.commit('applicant/check')
    },
    filter () {
      this.$store.commit('applicant/filter')
    }
  }
}
</script>
