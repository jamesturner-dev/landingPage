<script setup>
import TheHeader from './components/HeaderFiles/TheHeader.vue'
import TheFooter from './components/FooterFIles/TheFooter.vue'
</script>

<template>
  <div>
    <TheHeader />
    <main>
      <router-view :key="$route.fullPath" />
    </main>
    <TheFooter />
  </div>
</template>
