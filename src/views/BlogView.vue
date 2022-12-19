<template>
  <section class="pt-5 bg-white dark:bg-black ">
    <!-- <div v-if="pageRoute == 'help'">
      <HelpPage />
    </div> -->
    <div v-if="pageRoute == 'web-form'">
      <WebForm />
    </div>
    <div v-if="pageRoute == 'why-vue'">
      <WhyVue />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import WebForm from "../components/blog/WebForm.vue";
import WhyVue from "../components/blog/WhyVue.vue";
const route = useRoute();
const pageRoute = route.params.name; 
</script>
