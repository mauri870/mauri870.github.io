import Vue from 'vue'
import Vuex from 'vuex'

import info from './modules/info'
import projects from './modules/projects'
import social from './modules/social'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    info,
    projects,
    social
  }
})
