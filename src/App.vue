<script setup>
import TheHeader from './components/HeaderFiles/TheHeader.vue'
import TheFooter from './components/FooterFiles/TheFooter.vue'
</script>

<template>
  <div>
    <TheHeader />
    <router-view :key="$route.fullPath" />
    <TheFooter />
  </div>
</template>
