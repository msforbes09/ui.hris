// client js
export default {
  namespaced: true,
  state: {
    editDialog: false,
    createBranchDialog: false,
    editBranchDialog: false,
    createPositionDialog: false,
    editPositionDialog: false,
    deleteDialog: false
  },
  mutations: {
    edit(state) {
      state.editDialog = true
    },
    createBranch(state) {
      state.createBranchDialog = true
    },
    editBranch(state) {
      state.editBranchDialog = true
    },
    createPosition(state) {
      state.createPositionDialog = true
    },
    editPosition(state) {
      state.editPositionDialog = true
    },
    delete(state) {
      state.deleteDialog = true
    },
    closeDialogs(state) {
      state.editDialog = false
      state.createBranchDialog = false
      state.editBranchDialog = false
      state.createPositionDialog = false
      state.editPositionDialog = false
      state.deleteDialog = false
    }
  },
  actions: {},
  getters: {
    editDialog: state => state.editDialog,
    createBranchDialog: state => state.createBranchDialog,
    editBranchDialog: state => state.editBranchDialog,
    createPositionDialog: state => state.createPositionDialog,
    editPositionDialog: state => state.editPositionDialog,
    deleteDialog: state => state.deleteDialog
  }
}
