import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuex)
Vue.use(ElementUI)

export default new Vuex.Store({
  state: {
    name: 'Denys Babin',
    checkMenu: false
  },
  mutations: {
    change () {
      this.state.name = 'Babin Denys version2'
    },
    menuClick () {
      this.state.checkMenu = !this.state.checkMenu
    }
  },
  actions: {
  },
  modules: {
  }
})
