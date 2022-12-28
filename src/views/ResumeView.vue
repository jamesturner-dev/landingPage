<template>
  <div class="overflow-hidden py-10 bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900">
    <div class="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">

      <div class="mx-auto max-w-prose text-base lg:max-w-none">
        <PersonalInfo />
        <p class="subHeadings">
          {{ blurb }}
        </p>
      </div>

      <div class="relative z-10 mx-auto leading-5 max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
        <p v-html="about" class=" text-gray-500 pb-3"> </p>
      </div>

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
import { ref } from "vue";

const blurb = ref(
  "I write code and manage modern dev stacks."
);

const about = ref(
  'I like VSCode, Express, Vue, and <a href = "https://www.jetbrains.com/lp/mono/" class= "text-purple-500 opacity-70 hover:opacity-100" target = "_blank" > Jet Brains Mono. </a> I code well in Python and Javascript, can work with sql and nosql dbs, and have used multiple cloud providers. I enjoy figuring out the best way to accomplish a task.Given the opportunity I will work on each task until there is nothing else I can do to improve it.'
);

</script>
