<template lang="jade">
  #social
    .container
      .row.centered
        .col-lg-12
          h2 Stay connected!
          br
        .col-lg-3.networks(v-for="network in networks")
          a(:href="network.link" target="_blank")
            i(:class="network.icon")
        .col-lg-12
          img.center-block.gopher(src="../assets/img/gopher.png")
</template>

<script>
  import { mapGetters } from 'vuex'
  import $ from 'jquery'

  export default {
    name: 'Social',
    mounted () {
      $(document).ready(function () {
        $('img.gopher').hover(
          function () {
            $(this).animate({'width': '200px'}, 'fast')
            $('#social').animate({'padding-bottom': '100px'}, 'fast')
          },
          function () {
            $(this).animate({'width': '150px'}, 'fast')
            $('#social').animate({'padding-bottom': '50px'}, 'fast')
          }
        )
      })
    },
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
    padding-bottom: 50px;
    
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
    }
  }
</style>
