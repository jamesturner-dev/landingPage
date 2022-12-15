<script setup>
import FeaturesSection from '../components/FeaturesSection.vue'
import HeroSection from '../components/HeroSection.vue'
import LogoCloud from '../components/LogoCloud.vue'
import GradientSection from '../components/GradientSection.vue'
import CallToAction from '../components/CallToAction.vue'
</script>

<template>
  <div>
    <TheHeader />
    <main>
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <GradientSection />
      <CallToAction />
    </main>
    <TheFooter />
  </div>
</template>
