<template lang="jade">
  div
    #content
      .container
        .row
          .col-lg-6.col-lg-offset-3
            h1 
              i.fa.fa-warning.fa-2x
              br 
              |  Sorry but the page you are looking for could not be found
            router-link(to="/")
              button.btn.btn-default.btn-lg 
                i.fa.fa-home
                |  Take me home
    .span#control-navbar     
</template>

<script>
    export default {}
</script>

<style lang="scss">
  @import "../assets/sass/mixins.scss";

  #content {
    @include content-default;

    h1 {
      font-weight: 400;
      color: #000000;
      i {
        color: #FF0000;
      }
    }
  }
</style>
