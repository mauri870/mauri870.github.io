<template>

  <navbar-site></navbar-site>

  <header-wrap></header-wrap>

  <my-portfolio></my-portfolio>

  <social-section></social-section>

  <footer-site></footer-site>
</template>

<script>
import NavbarSite from './components/Navbar.vue'
import HeaderWrap from './components/Header.vue'
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
  @import url(http://fonts.googleapis.com/css?family=Ubuntu:400,700);

  body {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    font-size: 16px;

    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    color: #4a4a4a;
  }

  a {
    color: white;
  }

  a:hover {
    color: #1abc9c;
    text-decoration: none;
  }

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
</style>
