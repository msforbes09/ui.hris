<template>
  <div class="full-width q-pa-lg">
    <div class="row q-mb-lg">

      <div class="col">
        <div class="text-h5">Dashboard</div>
        <div class="text-caption">Applicant Management</div>
      </div>

    </div>

    <div class="row q-gutter-lg">
      <div class="col-3">

          <div class="q-card q-mb-lg status-box" v-for="box in 5" :key="box">
            <router-link to="/applicants">
              <div class="row content">
                <div class="left">50</div>
                <div class="right">Title Here</div>
              </div>
            </router-link>
          </div>

      </div>

      <div class="col">

        <q-card class="q-mb-lg">
          <q-card-section>
            <div class="text-subtitle1" to="/applicants/existing">Check for Existing Record</div>
          </q-card-section>
          <q-card-section>
            <div class="row justify-between">
              <div><q-input outlined label="Last Name" /></div>
              <div><q-input outlined label="First Name" /></div>
              <div><q-input outlined label="Middle Name" /></div>
            </div>
          </q-card-section>
          <q-card-actions>
            <div class="row full-width justify-center">
              <q-btn to="/applicants/existing">Create New Application</q-btn>
            </div>
          </q-card-actions>
        </q-card>

        <q-card>
          <q-card-section>
            <div class="row justify-between">
              <div class="text-subtitle1">Recent Applications</div>
              <q-btn to="/applicants">View all applicants</q-btn>
            </div>
          </q-card-section>
          <q-card-section>
             <q-markup-table flat dense>
              <thead class="text-left">
                <th>Name</th>
                <th>Client/Branch</th>
                <th>Contact #</th>
                <th>Position Applied</th>
                <th>Date Applied</th>
              </thead>
              <tbody>
                <tr v-for="item in 10" :key="item" @click="$router.push('/applicants/profile')">
                  <td>Dela Cruz, Juan</td>
                  <td>SRI/Head Office</td>
                  <td>09876543210</td>
                  <td>Staff</td>
                  <td>Mar 3, 2020</td>
                </tr>
              </tbody>
             </q-markup-table>
          </q-card-section>
        </q-card>

      </div>
    </div>
  </div>
</template>


<style scoped>
.status-box,
.status-box .content .left {
  height: 70px;
  line-height: 70px;
}

.status-box a {
  text-decoration: none;
  color: #5d5d5d;
}

.status-box .content .left {
  width: 30%;
  color: #ffffff;
  background-color: #5d5d5d;
  text-align: center;
}
/*
Coloring boxes
.status-box:nth-child(1) .content .left {
  background-color: indigo;
}
*/
.status-box .content .right {
  width: 70%;
  text-align: center;
}

tr:hover {
  cursor: pointer;
}
</style>
