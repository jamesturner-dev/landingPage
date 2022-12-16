<template>
  <section class="pt-5 bg-white dark:bg-black ">
    <div v-if="pageRoute == 'help'">
      <HelpPage />
    </div>
    <div v-if="pageRoute == 'about'">
      <AboutPage />
    </div>
    <div v-if="pageRoute == 'why-vue'">
      <WhyVue />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import AboutPage from "../components/page/AboutPage.vue";
import HelpPage from "../components/page/HelpPage.vue";
import WhyVue from "../components/page/WhyVue.vue";
const route = useRoute();
const pageRoute = route.params.name; 
</script>
