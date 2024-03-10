<template>
  <HomePage v-if="homeVisibility" @leaveHome="showAbout"/>
  <AboutMe v-if="aboutVisibility"/>
</template>

<script>
import HomePage from './components/HomePage.vue'
import AboutMe from './components/AboutMe.vue';

  export default {
    name: 'App',
    components: { HomePage, AboutMe },
    data () {
      return {
        homeVisibility: true,
        aboutVisibility: false
      }
    },
    methods: {
      showAbout() {
        this.homeVisibility = false
        this.aboutVisibility = true
      }
    }
  }
</script>

<style>

</style>
