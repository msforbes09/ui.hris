// auth js
import Axios from 'axios'

export default {
  namespaced: true,
  state: {
    user: JSON.parse(localStorage.getItem('user')),
    accessToken: localStorage.getItem('accessToken'),
    showSuccess: false,
    messageSuccess: '',
  },
  mutations: {
    setAuth(state, payload) {
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload.accessToken
      localStorage.setItem('accessToken', payload.accessToken)
      localStorage.setItem('user', JSON.stringify(payload.user))
      state.user = payload.user
      state.accessToken = payload.accessToken
    },
    removeAuth(state) {
      localStorage.clear()
      state.user = null
      state.accessToken = null
    },
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
  actions: {
    async login(context, payload) {
      try {
        const res = await Axios.post('api/get-token', payload)
        context.commit('setAuth', res.data)
      } catch (error) {
        throw error
      }
    },
    async logout(context, payload) {
      try {
        await Axios.post('api/remove-tokens')
        context.commit('removeAuth')
      } catch (error) {
        throw error
      }
    },
    async forgetPassword(context, payload) {
      try {
        await Axios.post('api/forgot-password', payload)
      } catch (error) {
        throw error
      }
    },
    async resetPassword(context, payload) {
      try {
        await Axios.post('api/reset-password', payload)
      } catch (error) {
        throw error
      }
    }
  },
  getters: {
    user: state => state.user,
    accessToken: state => state.accessToken,
    showSuccess: state => state.showSuccess,
    messageSuccess: state => state.messageSuccess
  }
}
