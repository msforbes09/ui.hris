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
            <q-btn @click="create">Create</q-btn>
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
                        <q-btn @click="edit">Edit</q-btn>
                        <q-btn @click="destroy">Delete</q-btn>
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

  </div>
</template>

<script>
export default {
  data: () => ({
    tab: 1,
  }),
  methods: {
    create () {
      this.$store.commit('keyword/create')
    },
    edit () {
      this.$store.commit('keyword/edit')
    },
    destroy () {
      this.$store.commit('keyword/confirm', 'Are you sure you want to delete?')
    }
  }
}
</script>

<style></style>
