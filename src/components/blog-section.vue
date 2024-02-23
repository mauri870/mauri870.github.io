<template lang="pug">
#blog-section
  .container
    .row.centered
      .col-lg-12
        h1
          | Check out my
          a(href="https://blog.mauri870.com") dev blog
          |  !
</template>
<style lang="scss">
  @import '../assets/sass/variables.scss';

  #blog-section {
    padding: 50px 50px;
    background-color: #f2f2f2;
    overflow: hidden;
    padding-bottom: 40px;
    a {
      color: $default-color;
      margin-left: 10px;
    }
  }
</style>
