// keyword js
export default {
  namespaced: true,
  state: {
    createDialog: false,
    editDialog: false,
    deleteDialog: false,
  },
  mutations: {
    edit(state) {
      state.editDialog = true
    },
    create(state) {
      state.createDialog = true
    },
    destroy(state) {
      state.deleteDialog = true
    },
    closeDialogs(state) {
      state.createDialog = false
      state.editDialog = false
      state.deleteDialog = false
    }
  },
  actions: {},
  getters: {
    createDialog: state => state.createDialog,
    editDialog: state => state.editDialog,
    deleteDialog: state => state.deleteDialog
  }
}
