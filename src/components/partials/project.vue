<template lang="pug">
  .col-sm-4.project
    h3 {{ item.name }}
    a(:href="item.link" target="_blank")
      img.img-responsive(:src="item.image" class="img-responsive")
    .techs
      span.label.label(v-for="tech in item.techs") {{ tech.trim().replace(" ", "-").toLowerCase() }}
    p.description {{ item.description }}
</template>

<script>
export default {
  props: ['item'],
};
</script>

<style lang="scss">
  @import "../../assets/sass/variables.scss";
  .project {
    margin-top: 30px;

    img {
      opacity: 0.4;
      transition: all .2s ease-in-out;
      &:hover {
        opacity: 0.8;
        transform: scale(1.1);
      }
    }

    .description {
      min-height: 100px;
      font-weight: 500;
    }

    .techs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      span {
        background-color: $default-color;
        margin: 2px;
        font-size: 13px;
      }
    }
  }
</style>
