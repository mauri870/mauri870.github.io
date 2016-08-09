<template lang="jade">
  div
    fake-loader

    navbar-site

    router-view

    social-section

    footer-site
</template>

<script>
import FakeLoader from './components/Fakeloader.vue'
import NavbarSite from './components/Navbar.vue'
import SocialSection from './components/Social.vue'
import FooterSite from './components/Footer.vue'

export default {
  name: 'Site',
  components: {
    FakeLoader,
    NavbarSite,
    SocialSection,
    FooterSite
  }
}
</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Ubuntu:400,700), "assets/sass/variables.scss";
  
  body{
    font-family: $default-font;
    font-weight: $default-font-weight;
    font-size: $default-font-size;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;

    ::-moz-selection {
      background: #f2c2c9;
      color: black;
      text-shadow: none;
    }

    ::selection {
      background: #16a085;
      color: black;
      text-shadow: none;
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: 700;
      color: #4a4a4a;
    }

    a {
      color: white;
      &:hover {
        color: $default-color;
        text-decoration: none;
      }
    }

    hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #ccc;
      margin: 1em 0;
      padding: 0;
    }

    .centered {
      text-align: center
    }

    .mt {
      margin-top: 80px;
    }

    .mb {
      margin-bottom: 80px;
    } 
  }
</style>
