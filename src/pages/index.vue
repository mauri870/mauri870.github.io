<template lang="pug">
  div
    header-wrap

    my-portfolio
</template>

<script>
    import HeaderWrap from '@/components/header.vue'
    import MyPortfolio from '@/components/portfolio.vue'
    
    export default {
      name: 'Index',
      components: {
        HeaderWrap,
        MyPortfolio
      }
    }
</script>
