<template lang="pug">
#fakeLoader
</template>

<script>
import $ from 'jquery';
import '../assets/js/fakeLoader';

export default {
  name: 'Fakeloader',
  mounted() {
    $(document).ready(() => {
      // Init Fakeloader
      $('#fakeLoader').fakeLoader({ spinner: 'spinner1', bgColor: '#1ABC9C' });
    });
  },
};
</script>

<style>
  @import '../assets/css/fakeLoader.css';

  #fakeLoader {
    z-index: 999999 !important;
  }
</style>
