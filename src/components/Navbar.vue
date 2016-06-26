<template>
  <!-- Static navbar -->
  <div class="navbar navbar-default navbar-fixed-top" id="navbar-menu" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand logo" href="/">M</a>
      </div>
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="http://github.com/mauri870" target="_blank"><i class="fa fa-github fa-2x"></i></a></li>
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </div>
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
  $default-color: #1abc9c;

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
