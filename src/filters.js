import Vue from 'vue';

Vue.filter('uppercase', (value) => value.toUpperCase());

Vue.filter('shuffleArray', (arr) => arr.sort(() => Math.random() - 0.5));
