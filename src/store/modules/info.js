export default {
  state: {
    phrase: 'Web Designer, Developer, Gamer, History, science and astronomy lover',
    email: 'mauri870@gmail.com',
    phone: '+55 54 8118-9792'
  },
  mutations: {},
  getters: {
    infoPhrase: state => state.phrase,
    infoEmail: state => state.email
  }
}
