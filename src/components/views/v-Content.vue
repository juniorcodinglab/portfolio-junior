<script>
import Top from './../../components/section/v-Top.vue';
import About from './../../components/section/v-About.vue';
import Experience from './../../components/section/v-Experience.vue';
import Projects from './../../components/section/v-Projects.vue';
import Contact from './../../components/section/v-Contact.vue';

export default {
  components: {
    Top, About, Experience, Projects, Contact,
  }
}
</script>

<template>
  <div class="content">
    <Top />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </div>
</template>

<style>

</style>
