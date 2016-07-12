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
        a#hiring(href="#" @click.prevent="clickHireMe") Contact Me!
      .navbar-collapse.collapse
        ul.nav.navbar-nav.navbar-right
          li
            a(href="http://github.com/mauri870" target="_blank")
              i.fa.fa-github.fa-2x
</template>

<script>
import $ from 'jquery'

export default {
  vuex: {
    getters: {
      email: ({info}) => info.email
    }
  },
  methods: {
    clickHireMe () {
      window.location.href = `mailto:${this.email}`
    }
  },
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

    a#hiring {
      position: relative;
      top: 45px;
      background: $default-color;
      padding: 7px 15px;
      color: white;
      display: inline;
      top: 15px;
      text-transform: uppercase;
      letter-spacing: 1.3px;
      text-decoration: none;
      font-size: 13px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -ms-border-radius: 3px;
      -o-border-radius: 3px;
      border-radius: 3px;
      font-weight: 600;
      margin-top: 21px;
      -webkit-transition: all 0.2s ease-in-out;
      -moz-transition: all 0.2s ease-in-out;
      -ms-transition: all 0.2s ease-in-out;
      -o-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;

      &:after {
        position: absolute;
        content: "";
        left: -5px;
        top: 10px;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid $default-color;
        -webkit-transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -ms-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
      }
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
