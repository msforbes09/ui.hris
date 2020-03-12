<template>
  <div class="full-width q-pa-lg">
    <div class="row q-mb-lg">

      <div class="col">
        <div class="text-h5">Keywords</div>
        <div class="text-caption">Keyword Management</div>
      </div>

    </div>

    <q-card>
      <q-card-section class="row">
        <div class="col-3">

          <q-tabs
              v-model="tab"
              vertical
              class="text-teal"
            >
            <q-tab v-for="tab in 10" :key="tab" :name="tab" :label="'Keyword ' + tab" />
          </q-tabs>

        </div>
        <div class="col">

          <div class="row justify-end q-pa-lg">
            <q-btn @click="formDialog = true">Create</q-btn>
          </div>

          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel v-for="panel in 10" :key="panel" :name="panel">
              <div class="col">
                <q-list bordered separator>
                  <q-item v-for="item in panel" :key="item">
                    <q-item-section>
                      Keyword Value {{item}}
                    </q-item-section>
                    <q-item-section>
                      <div class="row justify-center">
                        <q-btn @click="formDialog = true">Edit</q-btn>
                        <q-btn @click="confirmDialog = true">Delete</q-btn>
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-tab-panel>

          </q-tab-panels>
        </div>
      </q-card-section>
    </q-card>

    <q-dialog v-model="formDialog" persistent>
      <q-card style="width: 600px">

        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Keyword Value</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
           <q-input outlined v-model="value" label="Keyword Value" />
        </q-card-section>

        <q-card-actions>
          <q-space />
          <q-btn>Submit</q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="confirmDialog">
      <q-card style="width: 300px">

        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Delete Confirmation</div>
        </q-card-section>

        <q-card-section>
          <p>Are you sure you want to delete?</p>
        </q-card-section>

        <q-card-actions>
          <q-space />
          <q-btn v-close-popup>Confirm</q-btn>
          <q-btn v-close-popup>Cancel</q-btn>
        </q-card-actions>

      </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
  data: () => ({
    tab: 1,
    formDialog: false,
    confirmDialog: false,
  })
}
</script>

<style></style>
