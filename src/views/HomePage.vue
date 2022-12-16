<script setup>
import FeaturesSection from '../components/FeaturesSection.vue'
import HeroSection from '../components/HeroSection.vue'
import SiteStatus from '../components/SiteStatus.vue'
import GradientSection from '../components/GradientSection.vue'
import CallToAction from '../components/CallToAction.vue'
import SiteStats from '../components/SiteStats.vue'
</script>

<template>
  <main class="dark:bg-black">
    <HeroSection />
    <SiteStatus />
    <FeaturesSection />
    <GradientSection />
    <CallToAction />
    <SiteStats />
  </main>
</template>
