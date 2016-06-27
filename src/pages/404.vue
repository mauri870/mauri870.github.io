<template lang="jade">
  #content
    .container
      .row
        .col-lg-6.col-lg-offset-3
          h3 Sorry but the page you are looking for could not be found
  .span#control-navbar     
</template>

<script>
    export default {}
</script>

<style lang="scss">
  @import "../assets/sass/mixins.scss";

  #content {
    @include content-default

    h3 {
      font-weight: 400;
      color: #000000;
    }
  }
</style>
