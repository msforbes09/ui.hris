<template>
<div class="full-width q-pa-lg">
  <div class="row q-mb-lg">

    <div class="col">
      <div class="text-h5">Requirement Templates</div>
      <div class="text-caption">Requirement Templates Management</div>
    </div>

  </div>

  <q-card>
    <q-card-section class="row">
      <q-space />
      <q-btn @click="create">Create Template</q-btn>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <q-markup-table
        flat
      >
        <thead class="text-left">
          <th>Description</th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="item in 5" :key="item">
            <td>Template Description</td>
            <td>
              <div class="row">
                <q-btn @click="edit">Edit</q-btn>
                <q-btn @click="destroy">Delete</q-btn>
              </div>
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card-section>
  </q-card>
</div>
</template>

<script>
export default {
  methods: {
    create () {
      this.$store.commit('requirement_template/create')
    },
    edit () {
      this.$store.commit('requirement_template/edit')
    },
    destroy () {
      this.$store.commit('requirement_template/delete')
    }
  }
}
</script>
