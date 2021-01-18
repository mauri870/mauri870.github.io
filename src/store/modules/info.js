export default {
  state: {
    phrase: 'Software Engineer, Developer, Gamer, History, Science and astronomy lover',
    quote: 'Work hard. Dream big.',
    email: 'mauri870 [at] gmail [dot] com',
    phone: '+55 54 8118-9792',
    skills: ['LARAVEL', 'VUEJS', 'LUMEN', 'GO', 'REDIS', 'GIT', 'JWT', 'LUA', 'NGINX', 'PHP', 'ʕ◔ϖ◔ʔ', 'WEBPACK', 'ELECTRON', 'MYSQL', 'SOLID', 'REST API\'S', 'HTML', 'CSS', 'BOOTSTRAP', 'BOWER', 'COMPOSER', 'NPM', 'LINUX', 'GULP', 'AWS', 'DOCKER', 'KERAS', 'TENSORFLOW', 'ZEPHIR', 'GRPC', 'PROTOBUF', 'BAZEL', 'GCLOUD', 'KUBERNETES', 'GITLAB', 'BASH', 'PYTHON', 'RUST', 'ASTERISK', 'RTPPROXY', 'WEBSOCKETS', 'SOCKET.IO', 'GKE'],
  },
  mutations: {},
  getters: {
    infoPhrase: (state) => state.phrase,
    infoQuote: (state) => state.quote,
    infoEmail: (state) => state.email,
    infoSkills: (state) => state.skills,
  },
};
