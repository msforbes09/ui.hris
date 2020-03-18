<template>
  <div class="full-width q-pa-lg">
    <div class="row q-mb-lg">

      <div class="col">
        <div class="text-h5">Application Profile</div>
         <div class="text-caption">
          <router-link to="/applications">Application Management</router-link>> Application Profile
        </div>
      </div>

    </div>


    <q-card>
      <q-card-section>
        <div class="row items-center">
          <div class="col-6">
            <div class="row">
              <div class="col-4">Fullname:</div>
              <div>Dela Cruz, Juan</div>
            </div>
            <div class="row">
              <div class="col-4">Current Address:</div>
              <div>First Capitol Place, Kapitolyo, Pasig City</div>
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
        <div class="col">
          <div class="row justify-between">
            <div>Application Details</div>
            <div><q-btn @click="editApplication">Edit</q-btn></div>
          </div>
          <q-separator />
        </div>
        <div class="row">
          <div class="col-6">
            <div class="row">
              <div class="col-4">Code:</div>
              <div>00000001</div>
            </div>
            <div class="row">
              <div class="col-4">Date:</div>
              <div>Mar 03, 2020</div>
            </div>
            <div class="row">
              <div class="col-4">Branch Applied:</div>
              <div>Head Office</div>
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-4">Client:</div>
              <div>Client Name</div>
            </div>
            <div class="row">
              <div class="col-4">Client Branch:</div>
              <div>Client Branch name</div>
            </div>
            <div class="row">
              <div class="col-4">Position</div>
              <div>Staff</div>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row q-gutter-lg justify-center">
          <q-btn>Applied</q-btn>
          <q-btn>Interview</q-btn>
          <q-btn>Requirements</q-btn>
          <q-btn>Deployed</q-btn>
          <q-btn>Failed</q-btn>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="col">
          <div class="row justify-between">
            <div>Exam</div>
            <div><q-btn @click="createExam">Add Exam</q-btn></div>
          </div>
          <q-separator />
        </div>
        <q-markup-table
              flat
            >
            <thead class="text-left">
              <th>Type</th>
              <th>Status</th>
              <th>Date</th>
              <th>Remarks</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>Hanamaru</td>
                <td>Passed</td>
                <td>Mar 3, 2020</td>
                <td>Organized</td>
                <td class="row">
                  <q-btn @click="editExam">Edit</q-btn>
                  <q-btn @click="destroy">Delete</q-btn>
                </td>
              </tr>
            </tbody>
          </q-markup-table>
      </q-card-section>

      <q-card-section>
        <div class="col">
          <div class="row justify-between">
            <div>Interview</div>
            <div><q-btn @click="createInterview">Add Interview</q-btn></div>
          </div>
          <q-separator />
        </div>
        <q-markup-table
              flat
            >
            <thead class="text-left">
              <th>Type</th>
              <th>Date</th>
              <th>Interviewer</th>
              <th>Result</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>Initial Interview</td>
                <td>Mar 3, 2020</td>
                <td>SRI Interviewer</td>
                <td>Passed</td>
                <td class="row">
                  <q-btn @click="editInterview">Edit</q-btn>
                  <q-btn @click="destroy">Delete</q-btn>
                </td>
              </tr>
            </tbody>
          </q-markup-table>
      </q-card-section>

      <q-card-section>
        <div class="col">
          <div class="row justify-between">
            <div>Requirements</div>
            <div><q-btn @click="selectRequirements">Select</q-btn></div>
          </div>
          <q-separator />
        </div>
        <q-markup-table
              flat
            >
            <thead class="text-left">
              <th></th>
              <th>Complete</th>
              <th>Original</th>
              <th>Waived</th>
            </thead>
            <tbody>
              <tr>
                <td>Birth Certificate</td>
                <td><q-checkbox v-model="val"></q-checkbox></td>
                <td><q-checkbox v-model="val"></q-checkbox></td>
                <td><q-checkbox v-model="val"></q-checkbox></td>
              </tr>
            </tbody>
          </q-markup-table>
      </q-card-section>

    </q-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: 'applied',
    val: false
  }),
  methods: {
    editApplication () {
      this.$store.commit('applicant/editApplication')
    },
    createExam () {
      this.$store.commit('application/createExam')
    },
    editExam() {
      this.$store.commit('application/editExam')
    },
    createInterview() {
      this.$store.commit('application/createInterview')
    },
    editInterview() {
      this.$store.commit('application/editInterview')
    },
    selectRequirements () {
      this.$store.commit('application/selectRequirements')
    },
    destroy () {
      this.$store.commit('application/delete')
    },
    close () {
      this.$store.commit('application/closeDialogs')
    }
  }
}
</script>
