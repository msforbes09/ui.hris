// auth js
export default {
  namespaced: true,
  state: {
    showSuccess: false,
    messageSuccess: ''
  },
  mutations: {
    showSuccess(state, payload) {
      state.showSuccess = true
      state.messageSuccess = payload
    },
    hideSuccess(state) {
      state.showSuccess = false
    },
    messageSuccess(state, payload) {
      state.messageSuccess = payload
    }
  },
  actions: {},
  getters: {
    showSuccess: state => state.showSuccess,
    messageSuccess: state => state.messageSuccess
  }
}
