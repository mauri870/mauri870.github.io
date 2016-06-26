<template lang="jade">
  #footerwrap
    .container
      .row.centered
        .col-lg-4
          p
            b {{ phrase | uppercase }}
        .col-lg-4
        .col-lg-4
          p
            a(href="mailto:{{ email }}") {{ email }}
      .col-sm-12.text-center
        p Find the 
          i.fa.fa-code
          | of this project on 
          a(href="http://github.com/mauri870/mauri870.github.io" target="_blank")
            i.fa.fa-github.fa-2x
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
