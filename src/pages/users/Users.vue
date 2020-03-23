<template>
  <div class="q-pa-md">
    <q-table :data="data" :columns="columns" row-key="avatar" flat>
      <template v-slot:body-cell-name="props">
        <q-td :props="props" class="cursor-pointer text-bold text-blue">
          {{ props.value }}
        </q-td>
      </template>

      <template v-slot:body-cell-avatar="props">
        <q-td :props="props">
          <q-avatar size="35px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-td>
      </template>

      <template v-slot:body-cell-active="props">
        <q-td :props="props">
          <q-icon name="check_circle_outline" size="35px" color="green" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          name: 'avatar',
          label: 'Avatar',
          align: 'left',
          field: 'avatar',
          sortable: true
        },
        {
          name: 'name',
          label: 'Name',
          align: 'left',
          field: 'name',
          sortable: true
        },
        {
          name: 'branch',
          label: 'Branch',
          align: 'left',
          field: 'branch',
          sortable: true
        },
        {
          name: 'active',
          label: 'Active',
          align: 'left',
          field: 'active',
          sortable: true
        },
        {
          name: 'user_type',
          label: 'User Type',
          align: 'left',
          field: 'user_type',
          sortable: true
        }
      ],
      data: [
        {
          avatar: '1',
          name: 'Juan Dela Cruz',
          branch: 'Head Office',
          active: true,
          user_type: 'Administrator'
        },
        {
          avatar: '2',
          name: 'Juan Dela Cruz',
          branch: 'Head Office',
          active: true,
          user_type: 'Administrator'
        },
        {
          avatar: '3',
          name: 'Juan Dela Cruz',
          branch: 'Head Office',
          active: true,
          user_type: 'Administrator'
        },
        {
          avatar: '4',
          name: 'Juan Dela Cruz',
          branch: 'Head Office',
          active: true,
          user_type: 'Administrator'
        },
        {
          avatar: '5',
          name: 'Juan Dela Cruz',
          branch: 'Head Office',
          active: true,
          user_type: 'Administrator'
        },
        {
          avatar: '6',
          name: 'Juan Dela Cruz',
          branch: 'Head Office',
          active: true,
          user_type: 'Administrator'
        },
        {
          avatar: '7',
          name: 'Juan Dela Cruz',
          branch: 'Head Office',
          active: true,
          user_type: 'Administrator'
        },
        {
          avatar: '8',
          name: 'Juan Dela Cruz',
          branch: 'Head Office',
          active: true,
          user_type: 'Administrator'
        },
        {
          avatar: '9',
          name: 'Juan Dela Cruz',
          branch: 'Head Office',
          active: true,
          user_type: 'Administrator'
        },
        {
          avatar: '10',
          name: 'Juan Dela Cruz',
          branch: 'Head Office',
          active: true,
          user_type: 'Administrator'
        }
      ]
    }
  }
}
</script>

<style></style>
