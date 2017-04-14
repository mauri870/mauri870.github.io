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
        a.navbar-brand.logo(href="/") M
        a#hiring(href="#" @click.prevent="clickHireMe") Contact Me!
      .navbar-collapse.collapse
        ul.nav.navbar-nav.navbar-right
          li
            a(href="http://github.com/mauri870" target="_blank")
              i.fa.fa-github.fa-2x
          li
            a(href="https://www.kaggle.com/mauri870" target="_blank")
              svg(viewBox="0 0 16 16" width="30" height="30")
                path(d="M12.55 15.906c-.015.062-.078.094-.187.094H10.27c-.124 0-.234-.055-.328-.165L6.49 11.442l-.965.916v3.407c0 .157-.078.235-.235.235H3.67c-.158 0-.236-.078-.236-.235V.235C3.434.08 3.512 0 3.67 0h1.62c.157 0 .235.08.235.235v9.562L9.66 5.615c.11-.11.22-.164.33-.164h2.16c.095 0 .157.04.19.12.03.1.023.17-.024.21l-4.37 4.23 4.557 5.67c.063.07.078.14.047.24" fill="#1abc9c")
</template>

<script>
import { mapGetters } from 'vuex'
import $ from 'jquery'

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters({
      email: 'infoEmail'
    })
  },
  methods: {
    clickHireMe () {
      window.location.href = `mailto:${this.email}`
    }
  },
  mounted () {
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
