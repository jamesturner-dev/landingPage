<template>
  <section class="pt-5 bg-white dark:bg-black ">
    <div v-if="pageRoute == 'fast-websites'">
      <FastWebsites />
    </div>
    <div v-if="pageRoute == 'web-form'">
      <WebForm />
    </div>
    <div v-if="pageRoute == 'why-vue'">
      <WhyVue />
    </div>
    <div v-if="pageRoute == 'python-podcasts'">
      <PythonPodcasts />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import WebForm from "../components/blog/WebForm.vue";
import WhyVue from "../components/blog/WhyVue.vue";
import FastWebsites from "../components/blog/FastWebsites.vue";
import PythonPodcasts from "../components/blog/PythonPodcasts.vue";
const route = useRoute();
const pageRoute = route.params.name; 
</script>
