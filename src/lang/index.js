import Vue from 'vue'

import pt from './locales/pt-br'
import en from './locales/en'

export default {
  pt,
  en
}

export function changeLocale (lang) {
  Vue.config.lang = lang
}

