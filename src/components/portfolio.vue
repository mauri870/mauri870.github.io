<template lang="pug">
section#works
  .container
    .row.centered.mt.mb
      h1 I
        i.fa.fa-heart.heart.fa-pulse
        |  coding
      p Some projects that I worked on:

      project(v-for="project in projects", :item="project", :key="project.id")
</template>

<script>
import Project from '@/components/partials/project.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Portfolio',
  computed: {
    ...mapGetters({
      projects: 'projects',
    }),
  },
  components: {
    Project,
  },
};
</script>

<style lang="scss" scoped>
  .heart {
    color: red;
  }

  /* Icon pulse */
  .fa-pulse {
    -webkit-animation: pulse 2s linear infinite;
    animation: pulse 2s linear infinite;
  }

  /* PULSE ICON*/

  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }

    50% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }

    100% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @keyframes pulse {
    0% {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }

    50% {
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
    }

    100% {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
</style>
