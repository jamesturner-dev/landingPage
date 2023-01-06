<template>
  <div
    class="overflow-hidden py-10 bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900">
    <div class="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
      <PersonalInfo />
      <div class="lg:grid lg:items-start lg:gap-8">
        <div class="relative mx-auto mt-10 max-w-prose text-base lg:mt-0 lg:max-w-none">
          <SvgPattern />
          <blockquote class="relative rounded-lg bg-white dark:bg-black shadow-lg mr-5">
            <TheResume />
            <EducationInfo />
            <ResumeFooter />
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PersonalInfo from "../components/resume/PersonalInfo.vue";
import TheResume from "../components/resume/TheResume.vue";
import EducationInfo from "../components/resume/EducationInfo.vue";
import ResumeFooter from "../components/resume/ResumeFooter.vue";
import SvgPattern from "../components/shared/SvgPattern.vue";
</script>
