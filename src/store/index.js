import Vue from 'vue';
import Vuex from 'vuex';

import info from './modules/info';
import projects from './modules/projects';
import social from './modules/social';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    info,
    projects,
    social,
  },
});
