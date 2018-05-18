<template lang="pug">
  div
    #headerwrap
      .container
        .row
          .col-lg-12
            h3 My skills
            h1
              span.typed
        .row.curriculum
          .col-md-8.col-md-offset-2
            .btn-group.btn-group-justified
              a.btn.btn-site-color(href="https://github.com/mauri870/curriculum-vitae/raw/master/cv.pdf" download)
                  i.fa.fa-file-text
                  |  Curriculum EN
              a.btn.btn-site-color(href="https://github.com/mauri870/certificates" target="_blank")
                  i.fa.fa-file-text
                  |  Certificates
    .span#control-navbar
</template>

<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'
import '../../bower_components/typed.js/js/typed'

export default {
  name: 'Header',
  mounted () {
    let vm = this
    $(function () {
      $('.typed').typed({
        strings: vm.$options.filters.shuffleArray(vm.skills),
        typeSpeed: 0,
        loop: true
      })
    })
  },
  computed: {
    ...mapGetters({
      skills: 'infoSkills'
    })
  }
}
</script>

<style lang="scss">
  @import "../assets/sass/mixins.scss";

  #headerwrap {
    @include content-default
    background: url(../assets/img/work.jpg) no-repeat center top;
    background-attachment: relative;
    background-position: center center;
    background-size: cover;

    .curriculum {
      .btn-site-color {
        @include btn-site-color;
      }

      a {
        font-size: 100%;
        &:visited {
          color: #ffffff;
        }
      }
    }

    .typed {
      word-wrap: break-word;
    }

    .typed-cursor {
      opacity: 1;
      -webkit-animation: blink 0.7s infinite;
      -moz-animation: blink 0.7s infinite;
      animation: blink 0.7s infinite;
    }

    h1 {
      color:#ffffff;
      padding-top: 10px;
      padding-bottom: 20px;
      letter-spacing: 4px;
      font-size: 80px;
      font-weight: bold;
    }

    h3 {
      font-weight: 400;
      color: #ffffff;
    }
  }

  @keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
  }
  @-webkit-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
  }
  @-moz-keyframes blink{
    0% { opacity:1; }
    50% { opacity:0; }
    100% { opacity:1; }
  }
</style>
