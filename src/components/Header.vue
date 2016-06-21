<template>
  <div id="headerwrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-lg-offset-3">
          <h4>My skills</h4>
          <h1 class="typed"></h1>
        </div>
      </div>
    </div>
  </div>
  <span id="control-navbar"></span>
</template>

<script>
import $ from 'jquery'
import '../../bower_components/typed.js/js/typed'

export default {
  ready () {
    $(function () {
      $('.typed').typed({
        strings: ['LARAVEL', 'VUEJS', 'LUMEN', 'GIT', 'PHP', 'WEBPACK', 'ELECTRON', 'MYSQL', 'SOLID', 'REST API\'S', 'BOWER', 'COMPOSER', 'NPM', 'LINUX', 'GULP', 'AWS'],
        typeSpeed: 0,
        loop: true
      })
    })
  }
}
</script>

<style scoped>
  #headerwrap {
    background: url(../assets/img/work.jpg) no-repeat center top;
    margin-top: -70px;
    padding-top: 250px;
    text-align:center;
    background-attachment: relative;
    background-position: center center;
    min-height: 650px;
    width: 100%;

    -webkit-background-size: 100%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;

    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  #headerwrap h1 {
    color:#ffffff;
    padding-top: 10px;
    padding-bottom: 20px;
    letter-spacing: 4px;
    font-size: 80px;
    font-weight: bold;
  }

  #headerwrap h4 {
    font-weight: 400;
    color: #ffffff
  }
</style>
