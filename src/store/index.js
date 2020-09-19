import { createStore } from 'vuex';

import info from './modules/info';
import projects from './modules/projects';
import social from './modules/social';

export default createStore({
  modules: {
    info,
    projects,
    social,
  },
});
