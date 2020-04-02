<template>
  <q-card>
    <q-card-section class="row">
      <div class="col-3">

        <q-tabs
            v-model="tab"
            vertical
            class="text-teal"
            @input="selectKey"
          >
          <q-tab v-for="key in keys" :key="key.id" :name="key.id" :label="key.name.replace('_', ' ')" />
        </q-tabs>

      </div>
      <div class="col">

        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel :key="-1" :name="-1">
            <div class="text-center">No Keyword Selected.</div>
          </q-tab-panel>
          <q-tab-panel v-for="key in keys" :key="key.id" :name="key.id">
            <div class="row justify-end q-pa-lg">
              <q-btn @click="create">Create</q-btn>
            </div>
            <div class="col">
              <q-list bordered separator>
                <q-item v-for="keyword in key.keywords" :key="keyword.id">
                  <q-item-section>
                    {{keyword.value}}
                  </q-item-section>
                  <q-item-section>
                    <div class="row justify-center">
                      <q-btn @click="edit(keyword.id)">Edit</q-btn>
                      <q-btn @click="destroy(keyword.id)">Delete</q-btn>
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
</template>

<script>
export default {
  data: () => ({
    tab: -1,
  }),
  computed: {
    keys () {
      return this.$store.getters['keyword/keys']
    }
  },
  mounted () {
    this.$store.dispatch('keyword/all')
  },
  methods: {
    selectKey(key) {
      this.$store.commit('keyword/setKey', key)
    },
    create () {
      this.$store.commit('keyword/create')
    },
    edit (id) {
      this.$store.commit('keyword/setValue', id)
      this.$store.commit('keyword/edit')
    },
    destroy (id) {
      this.$store.commit('keyword/setValue', id)
      this.$store.commit('keyword/delete')
    }
  }
}
</script>

<style></style>
