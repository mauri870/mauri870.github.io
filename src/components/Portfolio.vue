<template>
  <section id="works"></section>
  <div class="container">
    <div class="row centered mt mb">
      <h1>I <i class="fa fa-heart heart fa-pulse"></i> open source</h1>

      <p>Some projects that I have worked on:</p>

      <div class="col-lg-4 col-md-4 col-sm-4 gallery" v-for="project in projects">
        <h3>{{ project.name }}</h3>
        <a target="_blank"
           :href="project.link">

          <img :src="project.image" class="img-responsive">
        </a>
        <p class="description">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioStore from '../store/portfolio'

export default {
  data () {
    return {
      projects: PortfolioStore.state.projects
    }
  }
}
</script>

<style scoped>
  .description {
    min-height: 100px;
    font-weight: 500;
  }

  .heart {
    color: red;
  }

  .gallery {
    margin-top: 30px;
  }

  .gallery img:hover {
    opacity: 0.4;
  }

  /* Icon pulse */
  .fa-pulse {
    display: inline-block;
    -moz-animation: pulse 2s infinite linear;
    -o-animation: pulse 2s infinite linear;
    -webkit-animation: pulse 2s infinite linear;
    animation: pulse 2s infinite linear;
  }

  @-webkit-keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
  @-moz-keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
  @-o-keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
  @-ms-keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
</style>
