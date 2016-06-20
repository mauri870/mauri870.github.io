<template>
  <div id="headerwrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-lg-offset-3">
          <h4>HELLO PEOPLE, MY NAME IS</h4>
          <h1>PAUL SILVA</h1>
          <h4>WEB DESIGNER, DEVELOPER & GAME ADDICT</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  #headerwrap {
    background: url(../assets/img/back.jpg) no-repeat center top;
    margin-top: -70px;
    padding-top: 250px;
    text-align:center;
    background-attachment: relative;
    background-position: center center;
    min-height: 650px;
    width: 100%;

    -webkit-background-size: 100%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;

    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  #headerwrap h1 {
    color:#ffffff;
    padding-top: 10px;
    padding-bottom: 20px;
    letter-spacing: 4px;
    font-size: 80px;
    font-weight: bold;
  }

  #headerwrap h4 {
    font-weight: 400;
    color: #ffffff
  }
</style>
