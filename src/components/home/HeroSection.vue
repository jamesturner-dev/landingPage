<template>

  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100 dark:bg-black" />
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">

      <div class="relative shadow-xl sm:overflow-hidden sm:rounded">
        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" :src="heroData.image" alt="Front-End Development" />
          <div class="absolute inset-0 bg-gradient-to-r from-purple-800 to-sky-700 mix-blend-multiply" />
        </div>

        <div class="relative px-5 py-10 sm:py-24 lg:py-20 lg:px-8">

          <transition name="fade" appear>
            <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span class="block text-white">{{ heroData.title }}</span>
              <span class="block text-sky-200">{{ heroData.subtitle }}</span>
            </h1>
          </transition>

          <p class="mx-auto mt-5 max-w-lg text-center text-xl text-sky-200 sm:max-w-3xl">
            <a href="/page/contact" class="bluLink"> {{ heroData.email }} </a>
            {{ heroData.blurb }}
          </p>

          <p class="mx-auto mt-3 max-w-lg leading-5 text-center text-base text-sky-200 sm:max-w-3xl">
            {{ heroData.intro }}
          </p>

          <div class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
            <div class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
              <a href="/resume" class="heroBtn bg-white text-sky-700 shadow-sm hover:bg-sky-50 sm:px-8">
                See Resume
              </a>
              <a href="/page/contact"
                class="heroBtn bg-sky-500 bg-opacity-60 text-white shadow-sm hover:bg-opacity-70 sm:px-8">
                Get in Touch
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
const heroData = ref({
  // image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100',
  image: 'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/b1c51acb-c27e-4f57-6ce9-acc9e7ec9900/public',
  title: 'Take Your Front End',
  subtitle: 'to the Next Level',
  email: 'james@jamesturner.dev',
  blurb: "can help take your front-end from planning to production.",
  intro: 'My front-end of choice is Vue, but I can work with any framework or library including React, Angular, and Svelte. Of course I can do vanilla JS and WordPress as well.'
})
</script>