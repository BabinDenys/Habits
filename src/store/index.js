import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Denys Babin',
    checkMenu: false,
    buyed: []
  },
  mutations: {
    change () {
      this.state.name = 'Babin Denys version2'
    },
    menuClick () {
      this.state.checkMenu = !this.state.checkMenu
    },
    addProduct (state, product) {
      this.state.buyed.push(product)
    }
  },
  actions: {
  },
  modules: {
  }
})
