<template lang="jade">
  section#works
    .container
      .row.centered.mt.mb
        h1 I 
          i.fa.fa-heart.heart.fa-pulse 
          | open source
        p Some projects that I have worked on:

        .col-sm-4.gallery(v-for="project in projects")
          h3 {{ project.name }}
          a(:href="project.link" target="_blank")
            img.img-responsive(:src="project.image" class="img-responsive")
          p.description {{ project.description }}
</template>

<script>
export default {
  vuex: {
    getters: {
      projects: ({projects}) => projects.projects
    }
  }
}
</script>

<style lang="scss" scoped>
  .description {
    min-height: 100px;
    font-weight: 500;
  }

  .heart {
    color: red;
  }

  .gallery {
    margin-top: 30px;
    img {
      &:hover {
        opacity: 0.4;
      }
    }
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
