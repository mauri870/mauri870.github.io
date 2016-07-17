<template lang="jade">
  div
    header-wrap

    my-portfolio
</template>

<script>
    import HeaderWrap from '../components/Header.vue'
    import MyPortfolio from '../components/Portfolio.vue'
    
    export default {
      name: 'Index'
      components: {
        HeaderWrap,
        MyPortfolio
      }
    }
</script>