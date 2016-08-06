<template lang="jade">
  .col-sm-4.project
    h3 {{ item.name }}
    a(:href="item.link" target="_blank")
      img.img-responsive(:src="item.image" class="img-responsive")
    p.description {{ item.description }}
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="scss">
  .description {
    min-height: 100px;
    font-weight: 500;
  } 

  .project {
    margin-top: 30px;
    img {
      transition: all .2s ease-in-out;
      &:hover {
        opacity: 0.4;
        transform: scale(1.1);
      }
    }
  }
</style>
