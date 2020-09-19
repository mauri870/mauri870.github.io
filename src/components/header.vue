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
        .col-md-2.col-md-offset-5
          .btn-group.btn-group-justified
            a.btn.btn-site-color(href="https://docs.google.com/viewer?url=https://github.com/mauri870/curriculum-vitae/raw/master/cv.pdf" download)
                i.fa.fa-file-text
                |  Curriculum
  .span#control-navbar
</template>

<script>
import { mapGetters } from 'vuex';
import Typed from 'typed.js';
import utils from '@/utils';

export default {
  name: 'Header',
  mounted() {
    const options = {
      strings: utils.shuffle(this.skills),
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    };
    new Typed('.typed', options); // eslint-disable-line no-new
  },
  computed: {
    ...mapGetters({
      skills: 'infoSkills',
    }),
  },
};
</script>

<style lang="scss">
  @import "../assets/sass/mixins.scss";

  #headerwrap {
    @include content-default;
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
