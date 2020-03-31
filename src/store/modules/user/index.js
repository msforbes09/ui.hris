import Axios from "axios";

// user js
export default {
  namespaced: true,
  state: {
    user: {},
    users: [],
    pagination: {},
    tools: {},
    createDialog: false,
    editDialog: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = state.users.find(user => user.id == payload)
    },
    setUsers(state, payload) {
      state.pagination = payload
      state.users = payload.data
    },
    setTools(state, payload) {
      state.tools = payload
    },
    create(state) {
      state.createDialog = true
    },
    edit(state) {
      state.editDialog = true
    },
    closeDialogs(state) {
      state.createDialog = false
      state.editDialog = false
    }
  },
  actions: {
    async tools(context) {
      try {
        const res = await Axios.get('api/tools/user-management')
        context.commit('setTools', res.data)
      } catch (error) {
        throw error
      }
    },
    async all(context, payload) {
      try {
        const res = await Axios.get('api/users?' + payload)
        context.commit('setUsers', res.data)
      } catch (error) {
        throw error
      }
    },
    async store(context, payload) {
      let data = new FormData()

      for(let key in payload) {
        data.append(key, payload[key])
      }

      try {
        await Axios.post('api/users', data, {headers: {'Content-Type': 'multipart/form-data'}})
        context.dispatch('all')
      } catch (error) {
        throw error
      }
    },
    async update(context, payload) {
      let data = new FormData()
      data.append('_method', 'put')

      for(let key in payload) {
        data.append(key, payload[key])
      }

      try {
        await Axios.post('api/users/' + payload.user_id, data, {headers: {'Content-Type': 'multipart/form-data'}})
        context.dispatch('all')
      } catch (error) {
        throw error
      }
    }
  },
  getters: {
    user: state => state.user,
    users: state => state.users,
    tools: state => state.tools,
    createDialog: state => state.createDialog,
    editDialog: state => state.editDialog
  }
}
