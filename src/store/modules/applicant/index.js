// applicant js
export default {
  namespaced: true,
  state: {
    checkDialog: false,
    createFamilyDialog: false,
    editFamilyDialog: false,
    createEducationDialog: false,
    editEducationDialog: false,
    createEmploymentDialog: false,
    editEmploymentDialog: false,
    createReferenceDialog: false,
    editReferenceDialog: false,
    createApplicationDialog: false,
    editApplicationDialog: false,
    editBasicDialog: false,
    editOtherDialog: false,
    editSSNumbersDialog: false,
    editEmergencyDialog: false,
    deleteDialog: false
  },
  mutations: {
    check(state) {
      state.checkDialog = true
    },
    createFamily(state) {
      state.createFamilyDialog = true
    },
    editFamily(state) {
      state.editFamilyDialog = true
    },
    createEducation(state) {
      state.createEducationDialog = true
    },
    editEducation(state) {
      state.editEducationDialog = true
    },
    createEmployment(state) {
      state.createEmploymentDialog = true
    },
    editEmployment(state) {
      state.editEmploymentDialog = true
    },
    createReference(state) {
      state.createReferenceDialog = true
    },
    editReference(state) {
      state.editReferenceDialog = true
    },
    createApplication(state) {
      state.createApplicationDialog = true
    },
    editApplication(state) {
      state.editApplicationDialog = true
    },
    editBasic(state) {
      state.editBasicDialog = true
    },
    editOther(state) {
      state.editOtherDialog = true
    },
    editSSNumbers(state) {
      state.editSSNumbersDialog = true
    },
    editEmergency(state) {
      state.editEmergencyDialog = true
    },
    delete(state) {
      state.deleteDialog = true
    },
    closeDialogs(state) {
      state.checkDialog = false
      state.createFamilyDialog = false
      state.editFamilyDialog = false
      state.createEducationDialog = false
      state.editEducationDialog = false
      state.createEmploymentDialog = false
      state.editEmploymentDialog = false
      state.createReferenceDialog = false
      state.editReferenceDialog = false
      state.createApplicationDialog = false
      state.editApplicationDialog = false
      state.editBasicDialog = false
      state.editOtherDialog = false
      state.editSSNumbersDialog = false
      state.editEmergencyDialog = false
      state.deleteDialog = false
    }
  },
  actions: {},
  getters: {
    checkDialog: state => state.checkDialog,
    createFamilyDialog: state => state.createFamilyDialog,
    editFamilyDialog: state => state.editFamilyDialog,
    createEducationDialog: state => state.createEducationDialog,
    editEducationDialog: state => state.editEducationDialog,
    createEmploymentDialog: state => state.createEmploymentDialog,
    editEmploymentDialog: state => state.editEmploymentDialog,
    createReferenceDialog: state => state.createReferenceDialog,
    editReferenceDialog: state => state.editReferenceDialog,
    createApplicationDialog: state => state.createApplicationDialog,
    editApplicationDialog: state => state.editApplicationDialog,
    editBasicDialog: state => state.editBasicDialog,
    editOtherDialog: state => state.editOtherDialog,
    editSSNumbersDialog: state => state.editSSNumbersDialog,
    editEmergencyDialog: state => state.editEmergencyDialog,
    deleteDialog: state => state.deleteDialog
  }
}
