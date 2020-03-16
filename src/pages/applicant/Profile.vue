<template>
  <div class="full-width q-pa-lg">
    <div class="row q-mb-lg">

      <div class="col">
        <div class="text-h5">Profile</div>
         <div class="text-caption">
          <router-link to="/applicants/dashboard">Applicant Management</router-link>> Applicant Profile
        </div>
      </div>

    </div>

    <q-card>
      <q-card-section>
        <div class="row justify-end">
          <q-btn @click="editBasic">Edit Info</q-btn>
        </div>
        <q-separator />
        <div class="row items-center">
          <div class="col-6">
            <div class="row">
              <div class="col-4">Fullname:</div>
              <div>Dela Cruz, Juan</div>
            </div>
            <div class="row">
              <div class="col-4">Email:</div>
              <div>juandelecruz@email.com</div>
            </div>
            <div class="row">
              <div class="col-4">Contact #:</div>
              <div>09874563210</div>
            </div>
            <div class="row">
              <div class="col-4">Current Address:</div>
              <div>First Capitol Place, Kapitolyo, Pasig City</div>
            </div>
            <div class="row">
              <div class="col-4">Permanent Address:</div>
              <div>(Same as above)</div>
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
        <div class="row">
          <div class="col-6">
            <div class="row">
              <div class="col-4">Nickname:</div>
              <div>Juan</div>
            </div>
            <div class="row">
              <div class="col-4">Birth Date:</div>
              <div>Mar 03, 1990</div>
            </div>
            <div class="row">
              <div class="col-4">Birth Place:</div>
              <div>Pasig City, Metro Manila</div>
            </div>
            <div class="row">
              <div class="col-4">Age:</div>
              <div>30</div>
            </div>
            <div class="row">
              <div class="col-4">Gender:</div>
              <div>Male</div>
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-4">Status:</div>
              <div>Deployed</div>
            </div>
            <div class="row">
              <div class="col-4">Last Application:</div>
              <div>Mar 03, 2020</div>
            </div>
            <div class="row">
              <div class="col-4">Deployed At:</div>
              <div>SRI/Head Office</div>
            </div>
            <div class="row">
              <div class="col-4">Hired Date:</div>
              <div>Mar 3, 2020</div>
            </div>
            <div class="row">
              <div class="col-4">Position:</div>
              <div>Staff</div>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row">
          <div class="col-5">
            <div class="col text-right">
              <div><q-btn @click="editOther">Edit</q-btn></div>
              <q-separator />
            </div>
            <div class="row">
              <div class="col-4">Tax Code:</div>
              <div>S</div>
            </div>
            <div class="row">
              <div class="col-4">Civil Status:</div>
              <div>Single</div>
            </div>
            <div class="row">
              <div class="col-4">Citizenship:</div>
              <div>Filipino</div>
            </div>
            <div class="row">
              <div class="col-4">Religion:</div>
              <div>Catholic</div>
            </div>
            <div class="row">
              <div class="col-4">Height:</div>
              <div>180 cm</div>
            </div>
            <div class="row">
              <div class="col-4">Weight:</div>
              <div>70 kg</div>
            </div>
          </div>
          <div class="col-2"> </div>
          <div class="col-5">
            <div class="col text-right">
              <div><q-btn @click="editSSNumbers">Edit</q-btn></div>
              <q-separator />
            </div>
            <div class="row">
              <div class="col-4">CRN:</div>
              <div>123456789-0</div>
            </div>
            <div class="row">
              <div class="col-4">SSS:</div>
              <div>123456789-0</div>
            </div>
            <div class="row">
              <div class="col-4">TIN:</div>
              <div>123456789-0</div>
            </div>
            <div class="row">
              <div class="col-4">PAGIBIG:</div>
              <div>123456789-0</div>
            </div>
            <div class="row">
              <div class="col-4">PAGIBIG Tracking:</div>
              <div>123456789-0</div>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row">
          <div class="col">
            <div class="col">
              <div class="row justify-between">
                  <div>Emergency Contact</div>
                  <q-btn @click="editEmergency">Edit</q-btn>
              </div>
              <q-separator />
            </div>
            <div class="row">
              <div class="col-2">Name:</div>
              <div>Pedro Dela Cruz</div>
            </div>
            <div class="row">
              <div class="col-2">Relationship:</div>
              <div>Father</div>
            </div>
            <div class="row">
              <div class="col-2">Address:</div>
              <div>Pasig City, Metro Manila</div>
            </div>
            <div class="row">
              <div class="col-2">Contact #:</div>
              <div>09876543210</div>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <q-tabs
          v-model="tab"
        >
          <q-tab name="families" label="Families" />
          <q-tab name="education" label="Education" />
          <q-tab name="employments" label="Employments" />
          <q-tab name="references" label="Rerefences" />
          <q-tab name="applications" label="Applications" />
        </q-tabs>

        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="families">
            <div class="col">
              <div class="row justify-end">
                  <q-btn @click="createFamily">Add Family</q-btn>
              </div>
              <q-separator />
            </div>
            <q-markup-table
              flat
            >
              <thead>
                <th>Name</th>
                <th>Relationship</th>
                <th>Address</th>
                <th>Occupation</th>
                <th>Birth Date</th>
                <th>Living</th>
                <th></th>
              </thead>
              <tbody>
                <tr>
                  <td>Maria Dela Cruz</td>
                  <td>Mother</td>
                  <td>Address</td>
                  <td>N/A</td>
                  <td>Jan 1, 1970</td>
                  <td>Yes</td>
                  <td class="row">
                    <q-btn @click="editFamily">Edit</q-btn>
                    <q-btn @click="destroy">Delete</q-btn>
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-tab-panel>
          <q-tab-panel name="education">
            <div class="col">
              <div class="row justify-end">
                  <q-btn @click="createEducation">Add Education</q-btn>
              </div>
              <q-separator />
            </div>
            <q-markup-table
              flat
            >
              <thead>
                <th>Level</th>
                <th>School</th>
                <th>Address</th>
                <th>Yr. From</th>
                <th>Yr. To</th>
                <th>Remarks</th>
                <th></th>
              </thead>
              <tbody>
                <tr>
                  <td>College</td>
                  <td>School Name</td>
                  <td>School Address</td>
                  <td>2011</td>
                  <td>2015</td>
                  <td>No honors</td>
                  <td class="row">
                    <q-btn @click="editEducation">Edit</q-btn>
                    <q-btn @click="destroy">Delete</q-btn>
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-tab-panel>
          <q-tab-panel name="employments">
            <div class="col">
              <div class="row justify-end">
                  <q-btn @click="createEmployment">Add Employment</q-btn>
              </div>
              <q-separator />
            </div>
            <q-markup-table
              flat
            >
              <thead>
                <th>Company</th>
                <th>Address</th>
                <th>Yr. From</th>
                <th>Yr. To</th>
                <th>Position</th>
                <th>Salary</th>
                <th>Remarks</th>
                <th></th>
              </thead>
              <tbody>
                <tr>
                  <td>Company Name</td>
                  <td>School Address</td>
                  <td>2015</td>
                  <td>2020</td>
                  <td>Staff</td>
                  <td>20000</td>
                  <td>Remarks</td>
                  <td class="row">
                    <q-btn @click="editEmployment">Edit</q-btn>
                    <q-btn @click="destroy">Delete</q-btn>
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-tab-panel>
          <q-tab-panel name="references">
            <div class="col">
              <div class="row justify-end">
                  <q-btn @click="createReference">Add Reference</q-btn>
              </div>
              <q-separator />
            </div>
            <q-markup-table
              flat
            >
              <thead>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Position</th>
                <th></th>
              </thead>
              <tbody>
                <tr>
                  <td>Reference Name</td>
                  <td>Reference Address</td>
                  <td>09876543210</td>
                  <td>reference@email.com</td>
                  <td>Manager</td>
                  <td class="row">
                    <q-btn @click="editReference">Edit</q-btn>
                    <q-btn @click="destroy">Delete</q-btn>
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-tab-panel>
          <q-tab-panel name="applications">
            <div class="col">
              <div class="row justify-end">
                  <q-btn @click="createApplication">Add Application</q-btn>
              </div>
              <q-separator />
            </div>
            <q-markup-table
              flat
            >
              <thead>
                <th>Code</th>
                <th>Client</th>
                <th>Branch</th>
                <th>Position</th>
                <th>Status</th>
                <th></th>
              </thead>
              <tbody>
                <tr>
                  <td>12345</td>
                  <td>Client Name</td>
                  <td>Client Branch</td>
                  <td>Client Position</td>
                  <td>For Interview</td>
                  <td class="row">
                    <q-btn @click="editApplication">Edit</q-btn>
                    <q-btn @click="destroy">Delete</q-btn>
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>

    </q-card>
  </div>
</template>


<script>
export default {
  data: () => ({
    tab: 'families'
  }),
  methods: {
    createFamily () {
      this.$store.commit('applicant/createFamily')
    },
    editFamily () {
      this.$store.commit('applicant/editFamily')
    },
    createEducation () {
      this.$store.commit('applicant/createEducation')
    },
    editEducation () {
      this.$store.commit('applicant/editEducation')
    },
    createEmployment () {
      this.$store.commit('applicant/createEmployment')
    },
    editEmployment () {
      this.$store.commit('applicant/editEmployment')
    },
    createReference () {
      this.$store.commit('applicant/createReference')
    },
    editReference () {
      this.$store.commit('applicant/editReference')
    },
    createApplication () {
      this.$store.commit('applicant/createApplication')
    },
    editApplication () {
      this.$store.commit('applicant/editApplication')
    },
    editBasic () {
      this.$store.commit('applicant/editBasic')
    },
    editOther () {
      this.$store.commit('applicant/editOther')
    },
    editSSNumbers () {
      this.$store.commit('applicant/editSSNumbers')
    },
    editEmergency () {
      this.$store.commit('applicant/editEmergency')
    },
    destroy () {
      this.$store.commit('applicant/delete')
    }
  }
}
</script>
