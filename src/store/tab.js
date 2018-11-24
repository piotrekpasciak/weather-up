export default {
  state: {
    tabs: [],
    currentTab: null
  },
  mutations: {
    ADD_NEW_TAB (state, data) {
      state.tabs.push(data)
    }
  },
  getters: {
    getTabs: store => store.tabs
  },
  actions: {
    addNewTab ({ commit }, data) {
      commit('ADD_NEW_TAB', data)
    }
  }
}
