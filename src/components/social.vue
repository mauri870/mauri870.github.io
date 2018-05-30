<template lang="pug">
  #social
    .container
      .row.centered
        .col-lg-12
          h2 Stay connected!
          br
        .col-lg-4.networks(v-for="network in networks")
          a(:href="network.link" target="_blank")
            i(:class="network.icon")
        .col-lg-12
          img.center-block.gopher(src="../assets/img/gopher.png")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Social',
    computed: {
      ...mapGetters({
        networks: 'networks'
      })
    }
  }
</script>

<style lang="scss">
  #social {
    padding: 50px 50px;
    background-color: #f2f2f2;
    overflow: hidden;
    padding-bottom: 40px;

    i {
      font-size: 40px;
      color: #4a4a4a;
      &:hover {
        color: #1abc9c
      }
    }

    .gopher {
      width: 150px;
      height: auto;
      position: absolute;
      left:0;
      right:0;
      top: 0;
      transition: top .5s;

      &:hover {
        top: -3rem;
      }
    }
  }
</style>
