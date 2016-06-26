<template>
  <div id="social">
    <div class="container">
      <div class="row centered">
        <div class="col-lg-3" v-for="network in networks">
          <a :href="network.link" target="_blank"><i class="fa fa-{{network.name}}"></i></a>
        </div>
      </div>
    </div>
  </div>
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

<style lang="scss" scoped>
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
