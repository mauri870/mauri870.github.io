<template lang="jade">
  <!-- Static navbar -->
  .navbar.navbar-default.navbar-fixed-top#navbar-menu(role="navigation")
    .container
      .navbar-header
        button.navbar-toggle(type="button" data-toggle="collapse" data-target=".navbar-collapse")
          span.sr-only Toggle navigation
          span.icon-bar
          span.icon-bar
          span.icon-bar
        a.navbar-brand.logo(v-link="{ path: '/' }") M
      .navbar-collapse.collapse
        ul.nav.navbar-nav.navbar-right
          li
            a(href="http://github.com/mauri870" target="_blank")
              i.fa.fa-github.fa-2x
</template>

<script>
import $ from 'jquery'

export default {
  ready () {
    $(window).on('scroll', function () {
      let navbar = $('#navbar-menu')
      if ($(this).scrollTop() >= $('#control-navbar').position().top) {
        navbar.addClass('nav-second-color')
      } else {
        navbar.removeClass('nav-second-color')
      }
    })
  }

}
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

    .logo {
      font-size: xx-large;
    }
    
    .navbar-nav {
      a {
        color: $default-color;
        background-color: transparent;
        &:hover {
          color: $default-color;
        }
      }
    }
  }

  .nav-second-color {
    background-color:#fff;
    color:#444;
  }
</style>
