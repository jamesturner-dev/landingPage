<script setup>
import FeaturesSection from '../components/home/FeaturesSection.vue'
import HeroSection from '../components/home/HeroSection.vue'
import SiteStatus from '../components/home/SiteStatus.vue'
import GradientSection from '../components/home/GradientSection.vue'
import CallToAction from '../components/home/CallToAction.vue'
import SiteStats from '../components/home/SiteStats.vue'
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
