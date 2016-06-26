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
        p Builded with 
          i.fa.fa-heart.heart
          |  on top of VueJs, Vuex, SCSS, Jade and Webpack      
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

      .heart {
        color: red;
      }
    }
  }
</style>
