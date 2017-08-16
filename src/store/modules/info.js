export default {
  state: {
    phrase: 'Software Engineer, Developer, Gamer, History, Science and astronomy lover',
    email: 'mauri870@gmail.com',
    phone: '+55 54 8118-9792',
    skills: ['LARAVEL', 'VUEJS', 'LUMEN', 'GO', 'REDIS', 'GIT', 'PHP', 'ʕ◔ϖ◔ʔ', 'WEBPACK', 'ELECTRON', 'MYSQL', 'SOLID', 'REST API\'S', 'HTML', 'CSS', 'BOOTSTRAP', 'BOWER', 'COMPOSER', 'NPM', 'LINUX', 'GULP', 'AWS', 'DOCKER', 'KERAS', 'TENSORFLOW', 'ZEPHIR', 'GRPC', 'PROTOBUF', 'BAZEL', 'GCLOUD', 'KUBERNETES', 'CONVNETS']
  },
  mutations: {},
  getters: {
    infoPhrase: state => state.phrase,
    infoEmail: state => state.email,
    infoSkills: state => state.skills
  }
}
