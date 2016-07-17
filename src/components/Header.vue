<template lang="jade">
  div
    #headerwrap
      .container
        .row
          .col-lg-6.col-lg-offset-3
            h3 My skills
            h1
              span.typed
        .row.curriculum
          .col-md-8.col-md-offset-2
            .btn-group.btn-group-justified
              a.btn.btn-site-color(href="static/docs/curricula/curriculum-en.pdf" target="_blank")
                  i.fa.fa-file-text
                  |  Curriculum EN
              a.btn.btn-site-color(href="https://github.com/mauri870/certificados" target="_blank")
                  i.fa.fa-file-text
                  |  Certificates
              a.btn.btn-site-color(href="static/docs/curricula/curriculum-pt.pdf" target="_blank")
                  i.fa.fa-file-text
                  |  Curriculum PT-BR
    .span#control-navbar
</template>

<script>
import $ from 'jquery'
import '../../bower_components/typed.js/js/typed'

export default {
  mounted () {
    $(function () {
      $('.typed').typed({
        strings: ['LARAVEL', 'VUEJS', 'LUMEN', 'GIT', 'PHP', 'WEBPACK', 'ELECTRON', 'MYSQL', 'SOLID', 'REST API\'S', 'HTML', 'CSS', 'BOOTSTRAP', 'BOWER', 'COMPOSER', 'NPM', 'LINUX', 'GULP', 'AWS'],
        typeSpeed: 0,
        loop: true
      })
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

    -webkit-background-size: 100%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;

    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
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

    
    .typed-cursor{
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
