<template>

  <footer class="bg-gradient-to-r from-purple-800 to-sky-700 text-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="pt-5">
      <FooterLinks />
      <FooterNav />
    </div>
  </footer>
</template>

<script setup>
import FooterNav from "./FooterNav.vue";
import FooterLinks from "./FooterLinks.vue";
import { onMounted } from "vue";

onMounted(() => {
  console.log("Footer mounted")
});

</script>
