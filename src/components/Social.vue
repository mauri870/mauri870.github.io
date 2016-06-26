<template lang="jade">
  #social
    .container
      .row.centered
        .col-lg-3(v-for="network in networks")
          a(:href="network.link" target="_blank")
            i(class="fa fa-{{network.name}}")
</template>

<script>
  export default {
    vuex: {
      getters: {
        networks: ({social}) => social.networks
      }
    }
  }
</script>

<style lang="scss">
  #social {
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #f2f2f2;
    
    i {
      font-size: 40px;
      color: #4a4a4a;
      &:hover {
        color: #1abc9c
      }
    }
  }
</style>
