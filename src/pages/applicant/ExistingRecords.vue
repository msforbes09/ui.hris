<template>
  <div class="full-width q-pa-lg">
    <div class="row q-mb-lg">
      <div class="col">
        <div class="text-h5">Check for Existing Records</div>
        <div class="text-caption">
          <router-link to="/applicants/dashboard">Applicant Management</router-link>> Existing Records
        </div>
      </div>
    </div>

    <div class="row q-mb-lg justify-end">
      <q-btn to="/applicants/create">Create New Applicant</q-btn>
    </div>

    <div class="row justify-center">
      <div class="existing-record q-card q-pa-md q-mb-lg">
        <div v-if="noMatch" class="q-card-section">
          <div class="col text-center">
            <div class="q-mb-lg">No matching records.</div>
            <div>
              <q-btn to="/applicants/create">Create New Applicant</q-btn>
            </div>
          </div>
        </div>
        <div v-else class="q-card-section">
          <div class="text-center q-mb-md">Match Found</div>
          <div class="row q-gutter-lg">
            <div class="col">
              <div class="col">
                <div>Dela Cruz, Juan</div>
                <div>Mar 3, 1990</div>
                <div class="row q-gutter-x-md q-mb-sm">
                  <div>Last Application:</div>
                  <div class="last-application wrap col q-pa-sm">
                    <div>SRI/Head Office</div>
                    <div>Staff</div>
                    <div>Mar 3, 2020</div>
                  </div>
                </div>
                <div class="row q-gutter-x-md">
                  <div>Status:</div>
                  <div>Deployed</div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row justify-between">
                <div>SSS:</div>
                <div>123456789-0</div>
              </div>
              <div class="row justify-between">
                <div>Pagibig:</div>
                <div>123456789-0</div>
              </div>
              <div class="row justify-between">
                <div>TIN:</div>
                <div>123456789-0</div>
              </div>
              <div class="row justify-between">
                <div>Phil Health:</div>
                <div>123456789-0</div>
              </div>
            </div>
          </div>
          <div class="row justify-end">
            <q-btn :to="url">Create New Application</q-btn>
          </div>
        </div>
      </div>

      <div v-for="item in 3" :key="item" class="existing-record q-card q-pa-md q-mb-lg">
        <div class="q-card-section">
          <div class="text-center q-mb-md">Other Match</div>
          <div class="row q-gutter-lg">
            <div class="col">
              <div class="col">
                <div>Dela Cruz, Juan</div>
                <div>Mar 3, 1990</div>
                <div class="row q-gutter-x-md q-mb-sm">
                  <div>Last Application:</div>
                  <div class="last-application wrap col q-pa-sm">
                    <div>SRI/Head Office</div>
                    <div>Staff</div>
                    <div>Mar 3, 2020</div>
                  </div>
                </div>
                <div class="row q-gutter-x-md">
                  <div>Status:</div>
                  <div>Deployed</div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row justify-between">
                <div>SSS:</div>
                <div>123456789-0</div>
              </div>
              <div class="row justify-between">
                <div>Pagibig:</div>
                <div>123456789-0</div>
              </div>
              <div class="row justify-between">
                <div>TIN:</div>
                <div>123456789-0</div>
              </div>
              <div class="row justify-between">
                <div>Phil Health:</div>
                <div>123456789-0</div>
              </div>
            </div>
          </div>
          <div class="row justify-end">
            <q-btn :to="url">Create New Application</q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({
    noMatch: true
  })
}
</script>

<style scoped>
.existing-record.q-card {
  width: 600px;
}
.last-application {
  background-color: #bbbbbb;
  border-radius: 5px;
}
</style>
