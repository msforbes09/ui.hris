// application js
export default {
  namespaced: true,
  state: {
    createExamDialog: false,
    editExamDialog: false,
    createInterviewDialog: false,
    editInterviewDialog: false,
    selectRequirementsDialog: false,
    deleteDialog: false
  },
  mutations: {
    createExam(state) {
      state.createExamDialog = true
    },
    editExam(state) {
      state.editExamDialog = true
    },
    createInterview(state) {
      state.createInterviewDialog = true
    },
    editInterview(state) {
      state.editInterviewDialog = true
    },
    selectRequirements(state) {
      state.selectRequirementsDialog = true
    },
    delete(state) {
      state.deleteDialog = true
    },
    closeDialogs(state) {
      state.createExamDialog = false
      state.editExamDialog = false
      state.createInterviewDialog = false
      state.editInterviewDialog = false
      state.selectRequirementsDialog = false
      state.deleteDialog = false
    }
  },
  actions: {},
  getters: {
    createExamDialog: state => state.createExamDialog,
    editExamDialog: state => state.editExamDialog,
    createInterviewDialog: state => state.createInterviewDialog,
    editInterviewDialog: state => state.editInterviewDialog,
    selectRequirementsDialog: state => state.selectRequirementsDialog,
    deleteDialog: state => state.deleteDialog
  }
}
