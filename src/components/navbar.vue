<template lang="pug">
.navbar.navbar-default.navbar-fixed-top#navbar-menu(role="navigation")
  .container
    .navbar-header
      button.navbar-toggle(type="button" data-toggle="collapse" data-target=".navbar-collapse")
        span.sr-only Toggle navigation
        span.icon-bar
        span.icon-bar
        span.icon-bar
      a.navbar-brand(href="/")
        img(width="30" height="30" src="favicon.svg")
    .navbar-collapse.collapse
      ul.nav.navbar-nav.navbar-right
        li
          a(href="blog/" target="_self")
            i.fa.fa-rss.fa-2x
        li
          a(href="https://github.com/mauri870" target="_blank")
            i.fa.fa-github.fa-2x
        li
          a(href="https://instagram.com/maurismeneguzzo" target="_blank")
            i.fa.fa-instagram.fa-2x
        li
          a(href="https://www.kaggle.com/mauri870" target="_blank")
            img(src="../assets/img/kaggle.svg")
</template>

<script>
import $ from 'jquery';

export default {
  name: 'Navbar',
  mounted() {
    $(window).on('scroll', () => {
      const navbar = $('#navbar-menu');
      if ($(this).scrollTop() >= $('#control-navbar').position().top) {
        navbar.addClass('nav-second-color');
      } else {
        navbar.removeClass('nav-second-color');
      }
    });
  },

};
</script>

<style lang="scss" scoped>
  @import "../assets/sass/variables.scss";

  .navbar-default {
    background-color: transparent;
    border-color: transparent;

    .navbar-brand {
      color: $default-color;
      font-weight: 700;
    }

    .navbar-nav {
      a {
        color: $default-color;
        background-color: transparent;
      }
    }
  }

  .nav-second-color {
    background-color:#fff;
    color:#444;
  }
</style>
