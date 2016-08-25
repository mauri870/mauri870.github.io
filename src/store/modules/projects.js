export default {
  state: {
    projects: [
      {
        name: 'Powershell Reverse Http',
        link: 'https://github.com/mauri870/powershell-reverse-http',
        description: 'A Powershell exploit, windows native service with no virus signature that open a reverse http connection via meterpreter',
        image: require('../../assets/img/portfolio/exploit.png')
      },
      {
        name: 'Cloudradioo App',
        link: 'http://github.com/devfake/cloudradioo-app',
        description: 'Cloudradioo App is a desktop application builded with Electron, VueJs and Vuex that plays randomly all top 50 songs from the soundcloud charts',
        image: require('../../assets/img/portfolio/cloudradioo-app.png')
      },
      {
        name: 'mauri870/api-skeleton-laravel',
        link: 'https://github.com/mauri870/api-skeleton-laravel',
        description: 'An API Skeleton for Laravel 5.1 with JWT',
        image: require('../../assets/img/portfolio/laravel-package.png')
      },
      {
        name: 'artesaos/laravel-docs',
        link: 'https://github.com/artesaos/laravel-docs',
        description: 'Translation of Laravel 5 docs to PT-BR',
        image: require('../../assets/img/portfolio/artesaos-package.png')
      },
      {
        name: 'artesaos/laravel-installer',
        link: 'https://github.com/artesaos/laravel-installer',
        description: 'Install laravel framework with any version you want',
        image: require('../../assets/img/portfolio/artesaos-package.png')
      },
      {
        name: 'artesaos/defender',
        link: 'https://github.com/artesaos/defender',
        description: 'Roles & Permissions for Laravel 5',
        image: require('../../assets/img/portfolio/artesaos-package.png')
      },
      {
        name: 'artesaos/laravel-linkedin',
        link: 'https://github.com/artesaos/laravel-linkedin',
        description: 'Linkedin API integration for Laravel and Lumen 5',
        image: require('../../assets/img/portfolio/artesaos-package.png')
      }
    ]
  },
  mutations: {},
  getters: {
    projects: state => state.projects
  }
}
