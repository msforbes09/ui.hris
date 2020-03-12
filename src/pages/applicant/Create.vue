<template>
  <div class="full-width q-pa-lg">
    <div class="row q-mb-lg">

      <div class="col">
        <div class="text-h5">Check for Existing Records</div>
        <div class="text-caption">
          <router-link to="/applicants/dashboard">Applicant Management</router-link> > Create Applicant
        </div>
      </div>

    </div>

    <q-stepper v-model="step" ref="stepper" color="primary" animated>
      <q-step :name="1" title="Step 1">
        <div class="col">
          <div class="text-subtitle1">Basic Information</div>
          <div class="row q-gutter-lg q-mb-lg">
            <q-input outlined label="Last Name" />
            <q-input outlined label="First Name" />
            <q-input outlined label="Middle Name" />
            <q-input outlined label="Suffix" />
          </div>
          <div class="row q-gutter-lg q-mb-lg">
            <q-input outlined label="Nickname" />
            <q-input outlined label="Birth Date" v-model="date">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-input outlined label="Birth Place" />
            <q-select outlined :options="['Male', 'Female']" label="Gender" />
          </div>
          <div class="row q-mb-lg">
            <q-input outlined label="Current Address" />
          </div>
          <div class="row">
            <q-input outlined label="Permanent Address" />
          </div>
        </div>
      </q-step>
      <q-step :name="2" title="Step 2">
        <div class="col">
          <div class="text-subtitle1">Basic Information</div>
          <div class="row q-gutter-lg q-mb-lg">
            <q-input outlined label="Contact #" />
            <q-input outlined label="Email" />
          </div>
        </div>
        <div class="col">
          <div class="text-subtitle1">Other Information</div>
          <div class="row q-gutter-lg q-mb-lg">
            <q-input outlined label="Tax Code" />
            <q-input outlined label="Civil Status" />
            <q-input outlined label="Citizenship" />
            <q-input outlined label="Religion" />
          </div>
          <div class="row q-gutter-lg q-mb-lg">
            <q-input outlined label="Height" />
            <q-input outlined label="Weight" />
          </div>
        </div>
      </q-step>
      <q-step :name="3" title="Step 3">
        <div class="col">
          <div class="text-subtitle1">SS Numbers</div>
          <div class="row q-gutter-lg q-mb-lg">
            <q-input outlined label="CRN" />
            <q-input outlined label="SSS" />
            <q-input outlined label="TIN" />
          </div>
          <div class="row q-gutter-lg q-mb-lg">
            <q-input outlined label="Philhealth" />
            <q-input outlined label="Pagibig" />
            <q-input outlined label="Pagibig Tracking" />
          </div>
        </div>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation class="row">
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Previous" class="q-ml-sm" />
          <q-space />
          <q-btn :to="step === 3 ? '/applicants' : '#'" @click="$refs.stepper.next()" color="primary" :label="step === 3 ? 'Finish' : 'Next'" />
        </q-stepper-navigation>
      </template>

    </q-stepper>

  </div>
</template>

<script>
  export default {
    data: () => ({
      step: 1,
      date: ''
    })
  }
</script>

<style scoped>
  .q-field {
    width: 200px
  }
</style>
