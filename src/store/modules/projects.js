export default {
  state: {
    projects: [
      {
        name: 'Entr',
        link: 'https://github.com/mauri870/entr',
        description: 'Cross platform way to run arbitrary commands when files change',
        techs: ['rust', 'kqueue', 'epool', 'inotify', 'File Watcher'],
        image: require('../../assets/img/portfolio/rust.png')
      },
      {
        name: 'Ransomware',
        link: 'https://github.com/mauri870/ransomware',
        description: 'A crypto-ransomware written in pure go (Academic)',
        techs: ['Go', 'Malware', 'Security', 'Cryptography'],
        image: require('../../assets/img/portfolio/security-padlock.png')
      },
      {
        name: 'Baking Pi',
        link: 'https://github.com/mauri870/baking-pi',
        description: 'Operating Systems development',
        techs: ['Assembly', 'ARM', 'OS'],
        image: require('../../assets/img/portfolio/assembly.png')
      },
      {
        name: 'Assembly Fun',
        link: 'https://github.com/mauri870/problems-assembly',
        description: 'Some fun in assembly linux x64',
        techs: ['Assembly', 'x64', 'Syscalls', 'Linux'],
        image: require('../../assets/img/portfolio/assembly.png')
      },
      {
        name: 'Kaggle Cats vs Dogs Redux',
        link: 'https://github.com/mauri870/kaggle-cats-vs-dogs-redux',
        description: 'Solution for the 51st place on the Kaggle Cats vs Dogs Redux competition',
        techs: ['Go', 'Deep Learning', 'Kaggle', 'Tensorflow'],
        image: require('../../assets/img/portfolio/machine-learning.png')
      },
      {
        name: 'Cryptofile',
        link: 'https://github.com/mauri870/cryptofile',
        description: 'Encrypt or decrypt files using AES-256 or AES-128',
        techs: ['Go', 'Security', 'Cryptography'],
        image: require('../../assets/img/portfolio/security-padlock.png')
      },
      {
        name: 'Powershell Reverse Http',
        link: 'https://github.com/mauri870/powershell-reverse-http',
        description: 'A Powershell exploit, windows native service with no virus signature that open a reverse http connection via meterpreter',
        techs: ['Go', 'Exploit', 'Metasploit Framework'],
        image: require('../../assets/img/portfolio/exploit.png')
      },
      {
        name: 'Cloudradioo App',
        link: 'http://github.com/devfake/cloudradioo-app',
        description: 'Cloudradioo App is a desktop application builded with Electron, VueJs and Vuex that plays randomly all top 50 songs from the soundcloud charts',
        techs: ['Electron', 'Vuejs', 'Vuex'],
        image: require('../../assets/img/portfolio/cloudradioo-app.png')
      },
      {
        name: 'Laravel Skeleton Api',
        link: 'https://github.com/mauri870/api-skeleton-laravel',
        description: 'An API Skeleton for Laravel 5.1 with JWT',
        techs: ['Laravel', 'JWT', 'REST'],
        image: require('../../assets/img/portfolio/laravel-package.png')
      },
      {
        name: 'Laravel Docs',
        link: 'https://github.com/artesaos/laravel-docs',
        description: 'Translation of Laravel 5 docs to PT-BR',
        techs: ['Laravel', 'Documentation'],
        image: require('../../assets/img/portfolio/artesaos-package.png')
      },
      {
        name: 'Laravel Installer',
        link: 'https://github.com/artesaos/laravel-installer',
        description: 'Install laravel framework with any version you want',
        techs: ['Laravel'],
        image: require('../../assets/img/portfolio/artesaos-package.png')
      },
      {
        name: 'Defender',
        link: 'https://github.com/artesaos/defender',
        description: 'Roles & Permissions for Laravel 5',
        techs: ['Laravel', 'Package'],
        image: require('../../assets/img/portfolio/artesaos-package.png')
      },
      {
        name: 'Laravel Linkedin Client',
        link: 'https://github.com/artesaos/laravel-linkedin',
        description: 'Linkedin API integration for Laravel and Lumen 5',
        techs: ['Laravel', 'Package'],
        image: require('../../assets/img/portfolio/artesaos-package.png')
      }
    ]
  },
  mutations: {},
  getters: {
    projects: state => state.projects
  }
}

