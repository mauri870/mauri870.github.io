export default {
  state: {
    networks: [
      { name: 'github', link: 'http://github.com/mauri870', icon: 'fa fa-github' },
      { name: 'linkedin', link: 'https://br.linkedin.com/in/mauri870', icon: 'fa fa-linkedin' },
      { name: 'gitlab', link: 'https://gitlab.fluxoti.com/mauri870', icon: 'fa fa-gitlab' },
      { name: 'steam', link: 'http://steamcommunity.com/id/mauri870', icon: 'fa fa-steam' },
    ],
  },
  mutations: {},
  getters: {
    networks: (state) => state.networks,
  },
};
