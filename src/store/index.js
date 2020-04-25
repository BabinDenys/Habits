import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuex)
Vue.use(ElementUI)

export default new Vuex.Store({
  state: {
    name: 'Denys Babin'
  },
  mutations: {
    change () {
      this.state.name = 'Babin Denys version2'
    }
  },
  actions: {
  },
  modules: {
  }
})
