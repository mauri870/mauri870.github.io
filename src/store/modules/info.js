export default {
  state: {
    phrase: 'Web Designer, Developer, Gamer, History, science and astronomy lover',
    email: 'mauri870@gmail.com',
    phone: '+55 54 8118-9792',
    skills: ['LARAVEL', 'VUEJS', 'LUMEN', 'GIT', 'PHP', 'ʕ◔ϖ◔ʔ', 'WEBPACK', 'ELECTRON', 'MYSQL', 'SOLID', 'REST API\'S', 'HTML', 'CSS', 'BOOTSTRAP', 'BOWER', 'COMPOSER', 'NPM', 'LINUX', 'GULP', 'AWS']
  },
  mutations: {},
  getters: {
    infoPhrase: state => state.phrase,
    infoEmail: state => state.email,
    infoSkills: state => state.skills
  }
}
