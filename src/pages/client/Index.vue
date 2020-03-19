<template>
  <div class="full-width q-pa-lg">
    <div class="row q-mb-lg">

      <div class="col">
        <div class="text-h5">Clients</div>
         <div class="text-caption">
          Client Management
        </div>
      </div>

    </div>

    <div class="row">
      <q-space />
      <q-input label="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div class="row justify-around q-gutter-lg">
      <router-link to="/clients/profile" v-for="item in 10" :key="item">
        <q-card>
          <q-card-section class="client-logo col bg-grey">
            <div>Client Name</div>
            <div class="text-caption">123456</div>
          </q-card-section>
          <q-card-section>
            <div class="col">
              <div>Branches: 5</div>
              <div>Positions: 10</div>
              <div>Deployed: 50</div>
            </div>
          </q-card-section>
        </q-card>
      </router-link>
    </div>
  </div>
</template>


<style scoped>
.client-logo {
  width: 180px;
  height: 150px;
}
</style>
