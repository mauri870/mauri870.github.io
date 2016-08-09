import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locales from './lang'

Vue.use(VueI18n)

// default lang
Vue.config.lang = 'en'

// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})
