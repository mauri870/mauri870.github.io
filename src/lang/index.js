import Vue from 'vue'

import PtBr from './locales/pt-br'
import En from './locales/en'

export default {
  'pt-br': PtBr,
  en: En
}

export function changeLocale (lang) {
  Vue.config.lang = lang
}

