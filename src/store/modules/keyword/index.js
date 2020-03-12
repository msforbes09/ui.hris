// keyword js
export default {
  namespaced: true,
  state: {
    showFormDialog: false,
    showConfirmDialog: false,
    confirmMessage: 'Are you sure?',
    isFormEdit: false
  },
  mutations: {
    edit(state) {
      state.isFormEdit = true
      state.showFormDialog = true
    },
    create(state) {
      state.isFormEdit = false
      state.showFormDialog = true
    },
    confirm(state, payload) {
      state.confirmMessage = payload
      state.showConfirmDialog = true
    },
    closeDialogs(state) {
      state.showFormDialog = false
      state.showConfirmDialog = false
    }
  },
  actions: {},
  getters: {
    showFormDialog: state => state.showFormDialog,
    showConfirmDialog: state => state.showConfirmDialog,
    confirmMessage: state => state.confirmMessage,
    isFormEdit: state => state.isFormEdit
  }
}
