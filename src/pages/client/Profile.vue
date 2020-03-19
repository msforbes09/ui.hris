<template>
  <div class="full-width q-pa-lg">
    <div class="row q-mb-lg">

      <div class="col">
        <div class="text-h5">Client Profile</div>
         <div class="text-caption">
          <router-link to="/clients">Client Management</router-link>> Client Profile
        </div>
      </div>

    </div>

    <q-card>
      <q-card-section class="text-right">
        <q-btn @click="edit">Edit Info</q-btn>
        <q-separator />
      </q-card-section>

      <q-card-section>
        <div class="row">
          <div class="col-6">
            <div class="row">
              <div class="col-4">Code:</div>
              <div>123456</div>
            </div>
            <div class="row">
              <div class="col-4">Name:</div>
              <div>Client Name</div>
            </div>
            <div class="row">
              <div class="col-4">Company:</div>
              <div>Company Name</div>
            </div>
          </div>
          <div class="col-6 text-center">
            <input ref="file" type="file" name="file" style="display:none">
            <q-btn
              flat
              color="white"
              style="height: 125px; width: 125px; background: #5d5d5d;"
              @click="$refs.file.click()"
            >Upload</q-btn>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <q-tabs v-model="tab">
          <q-tab name="branches" label="Branches" />
          <q-tab name="positions" label="Positions" />
          <q-tab name="deployed" label="Deployed" />
        </q-tabs>

        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="branches">
            <div class="col">
              <div class="row justify-end">
                  <q-btn @click="createBranch">Add Branch</q-btn>
              </div>
              <q-separator />
            </div>
            <q-markup-table
              flat
            >
              <thead class="text-left">
                <th>Code</th>
                <th>Name</th>
                <th></th>
              </thead>
              <tbody>
                <tr v-for="item in 3" :key="item">
                  <td>123456</td>
                  <td>Branch {{item}}</td>
                  <td class="row">
                    <q-btn @click="editBranch">Edit</q-btn>
                    <q-btn @click="destroy">Delete</q-btn>
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-tab-panel>

          <q-tab-panel name="positions">
            <div class="col">
              <div class="row justify-end">
                  <q-btn @click="createPosition">Add Position</q-btn>
              </div>
              <q-separator />
            </div>
            <q-markup-table
              flat
            >
              <thead class="text-left">
                <th>Code</th>
                <th>Name</th>
                <th></th>
              </thead>
              <tbody>
                <tr v-for="item in 3" :key="item">
                  <td>123456</td>
                  <td>Position {{item}}</td>
                  <td class="row">
                    <q-btn @click="editPosition">Edit</q-btn>
                    <q-btn @click="destroy">Delete</q-btn>
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-tab-panel>

          <q-tab-panel name="deployed">
            <div class="row">
              <q-space />
              <q-input outlined label="Search" icon="search">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
            <q-table flat :data="data" :columns="columns" row-key="id" @row-click="showApplicant" />
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: 'branches',
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
    edit () {
      this.$store.commit('client/edit')
    },
    showApplicant(event, row) {
      this.$router.push('/applicants/profile')
    },
    createBranch () {
      this.$store.commit('client/createBranch')
    },
    editBranch () {
      this.$store.commit('client/editBranch')
    },
    createPosition() {
      this.$store.commit('client/createPosition')
    },
    editPosition() {
      this.$store.commit('client/editPosition')
    },
    destroy () {
      this.$store.commit('client/delete')
    }
  }
}
</script>
