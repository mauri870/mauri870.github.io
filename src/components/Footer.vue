<template>
  <div id="footerwrap">
    <div class="container">
      <div class="row centered">
        <div class="col-lg-4">
          <p><b>{{ phrase | uppercase }}</b></p>
        </div>

        <div class="col-lg-4"></div>

        <div class="col-lg-4">
          <p><a href="mailto:{{ email }}">{{ email }}</a></p>
        </div>
      </div>
      <div class="col-sm-12 text-center">
        <p>Find the <i class="fa fa-code"></i> of this project on <a href="http://github.com/mauri870/mauri870.github.io" target="_blank"><i class="fa fa-github fa-2x"></i></a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  vuex: {
    getters: {
      phrase: ({info}) => info.phrase,
      email: ({info}) => info.email
    }
  }
}
</script>

<style lang="scss" scoped>
  #footerwrap {
    padding-top: 70px;
    padding-bottom: 50px;
    background-color: #2f2f2f;
    
    p {
      color: #f2f2f2;
      margin-left: 10px;
    }
  }
</style>
