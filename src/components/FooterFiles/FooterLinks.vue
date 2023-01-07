<template>
  <div class="pt-5 pb-10 pl-10 xl:grid xl:grid-cols-4 xl:gap-8 footer-links">
    <div class="grid grid-cols-2 gap-8 xl:col-span-4">
      <div class="md:grid md:grid-cols-2 md:gap-8">
        <FooterSites />
        <FooterArticles />
      </div>
      <div class="md:grid md:grid-cols-2 md:gap-8">
        <FooterTrending />
        <FooterExternal />
      </div>
    </div>
  </div>
</template>

<script setup>
import FooterSites from "./FooterSites.vue";
import FooterArticles from "./FooterArticles.vue";
import FooterTrending from "./FooterTrending.vue";
import FooterExternal from "./FooterExternal.vue";
</script>
