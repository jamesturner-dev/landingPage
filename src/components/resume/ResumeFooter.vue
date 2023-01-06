<template>
  <cite
    class="resumeFooter bg-gradient-to-r from-purple-700 to-sky-600 sm:mt-10 sm:items-start sm:py-5 sm:px-10">
    <span
      class="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform">
      <img class="h-12 w-12 rounded-full bg-indigo-300 sm:h-20 sm:w-20" :src="resumeFooter.image"
        :alt="resumeFooter.alt" />
    </span>
    <span class="relative ml-4 font-semibold leading-6 text-sky-200 sm:ml-24 sm:pl-1">
      <span class="font-semibold text-white sm:inline">
        {{ resumeFooter.name }}
      </span>
      <span class="sm:inline pl-2">{{ resumeFooter.title }}</span>
    </span>
  </cite>
</template>

<script setup>

import { ref } from 'vue'

const resumeFooter = ref({
  name: 'James Turner Dev',
  title: 'Full Stack Developer',
  alt: 'James Turner Dev - Front End Development',
  image: 'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/7f23edde-534b-4a88-8642-55fc9880e300/public'
})

</script>