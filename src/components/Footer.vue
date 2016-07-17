<template lang="jade">
  #footerwrap
    .container
      .row.centered
        .col-lg-12
          h2
            sup
              i.fa.fa-quote-left
            |  Work hard to make things happen
            sup
              i.fa.fa-quote-right
        .col-lg-4
          p
            b {{ phrase | uppercase }}
        .col-lg-4
        .col-lg-4
          p
            a(:href="mailto") {{ email }}
      .col-sm-12.text-center
        p Find the 
          i.fa.fa-code
          |  of this project on 
          a(href="http://github.com/mauri870/mauri870.github.io" target="_blank")
            i.fa.fa-github.fa-2x
        p Builded with 
          i.fa.fa-heart.heart
          |  on top of Vue 2.0, Vuex, SCSS, Jade and Webpack
      .col-sm-12.text-center
        img(src="https://api.travis-ci.org/mauri870/mauri870.github.io.svg?branch=develop")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Footer',
  computed: {
    ...mapGetters({
      phrase: 'infoPhrase',
      email: 'infoEmail'
    }),
    mailto () {
      return 'mailto:' + this.email
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/sass/variables.scss';

  #footerwrap {
    padding-top: 70px;
    padding-bottom: 50px;
    background-color: #2f2f2f;

    h2 {
      color: white;

      sup {
        color: $default-color;
      }
    }

    p {
      color: #f2f2f2;
      margin-left: 10px;

      .heart {
        color: red;
      }
    }
  }
</style>
