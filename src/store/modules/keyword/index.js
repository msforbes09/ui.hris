import Axios from "axios"
import store from "src/store"

// keyword js
export default {
  namespaced: true,
  state: {
    key: {},
    keys: [],
    value: {},
    createDialog: false,
    editDialog: false,
    deleteDialog: false,
  },
  mutations: {
    setKey(state, payload) {
      state.key = state.keys.find(key => key.id == payload)
    },
    setKeys(state, payload) {
      state.keys = payload
    },
    setValue(state, payload) {
      state.value = state.key.keywords.find(value => value.id == payload)
    },
    edit(state) {
      state.editDialog = true
    },
    create(state) {
      state.createDialog = true
    },
    delete(state) {
      state.deleteDialog = true
    },
    closeDialogs(state) {
      state.createDialog = false
      state.editDialog = false
      state.deleteDialog = false
    }
  },
  actions: {
    async all(context) {
      try {
        const res = await Axios.get('api/keywords')
        context.commit('setKeys', res.data)
      } catch (error) {
        throw error
      }
    },
    async store(context, payload) {
      try {
        await Axios.post('api/keywords', {key: context.getters['key'].id, ...payload})
        context.dispatch('all')
      } catch (error) {
        throw error
      }
    },
    async update(context, payload) {
      try {
        await Axios.put('api/keywords/' + context.getters['value'].id, {key: context.getters['key'].id, ...payload})
        context.dispatch('all')
      } catch (error) {
        throw error
      }
    },
    async delete(context) {
      try {
        await Axios.delete('api/keywords/' + context.getters['value'].id)
        context.dispatch('all')
      } catch (error) {
        throw error
      }
    }
  },
  getters: {
    key: state => state.key,
    keys: state => state.keys,
    value: state => state.value,
    createDialog: state => state.createDialog,
    editDialog: state => state.editDialog,
    deleteDialog: state => state.deleteDialog
  }
}
