<template lang="jade">
    #fakeLoader
</template>

<script>
import $ from 'jquery'
import '../../bower_components/fakeLoader/fakeLoader.min'

export default {
  ready () {
    // Init Fakeloader
    $('#fakeLoader').fakeLoader({spinner: 'spinner1', bgColor: '#1ABC9C'})
  }
}
</script>

<style>
  @import '../../bower_components/fakeLoader/fakeLoader.css';

  #fakeLoader {
    z-index: 999999 !important;
  }
</style>
