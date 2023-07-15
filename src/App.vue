<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';
import ContactUs from './components/ContactUs.vue';
</script>

<template>
  <div v-if="loading" class="flex h-screen bg-white">
    <div class="m-auto">
      <img src="/loading.gif" alt="Loading" class="w-20">
    </div>
  </div>
  <div v-else>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <ContactUs />
  </div>
</template>

<script>
export default {
  data(){
    return {
      loading: true
    }
  },
  mounted() {
    window.onload = () => {
      this.loading = false;
    };
  }

}
</script>
