<template>

  <navbar-site></navbar-site>


  <header-wrap></header-wrap>

  <my-portfolio></my-portfolio>

  <social-section></social-section>

  <footer-site></footer-site>
</template>

<script>
import NavbarSite from './components/Navbar.vue'
import HeaderWrap from './components/HeaderWrap.vue'
import MyPortfolio from './components/Portfolio.vue'
import SocialSection from './components/Social.vue'
import FooterSite from './components/Footer.vue'

export default {
  components: {
    NavbarSite,
    HeaderWrap,
    MyPortfolio,
    SocialSection,
    FooterSite
  }
}
</script>

<style>
  @import url(http://fonts.googleapis.com/css?family=Montserrat:400,700);

  ::-moz-selection {
    background: #f2c2c9;
    color: #a4003a;
    text-shadow: none;
  }

  ::selection {
    background: #16a085;
    color: #a4003a;
    text-shadow: none;
  }

  /*
   * A better looking default horizontal rule
   */

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

  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;

    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    color: #4a4a4a;
  }


  .navbar-brand {
    font-weight: 700;
  }

  .navbar-default .navbar-brand {
    color: #1abc9c;
  }

  .navbar-default {
    background-color: transparent;
    border-color: transparent;
  }

  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {
    color: #1abc9c;
    background-color: transparent;
    border-bottom: 2px solid #1abc9c
  }

  .navbar-default .navbar-nav > li > a {
    color: #1abc9c;
  }
</style>
