<template>
  <div id="footerwrap">
    <div class="container">
      <div class="row centered">
        <div class="col-lg-4">
          <p><b>{{ info.phrase | uppercase }}</b></p>
        </div>

        <div class="col-lg-4"></div>

        <div class="col-lg-4">
          <p><a href="mailto:{{ info.email }}">{{ info.email }}</a></p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 text-center">
        <p>Find the <i class="fa fa-code"></i> of this project on <a href="http://github.com/mauri870/mauri870.github.io" target="_blank"><i class="fa fa-github fa-2x"></i></a></p>
      </div>
    </div>
  </div>
</template>

<script>
import InfoStore from '../store/info'

export default {
  data () {
    return {
      info: InfoStore.state
    }
  }
}
</script>

<style scoped>
  #footerwrap {
    padding-top: 70px;
    padding-bottom: 50px;
    background-color: #2f2f2f;
  }

  #footerwrap p {
    color: #f2f2f2;
    margin-left: 10px;
  }
</style>
