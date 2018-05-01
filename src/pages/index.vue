<template lang="pug">
  div
    header-wrap

    blog-section

    my-portfolio
</template>

<script>
    import HeaderWrap from '@/components/header.vue'
    import MyPortfolio from '@/components/portfolio.vue'
    import BlogSection from '@/components/blog-section.vue'

    export default {
      name: 'Index',
      components: {
        HeaderWrap,
        MyPortfolio,
        BlogSection
      }
    }
</script>
