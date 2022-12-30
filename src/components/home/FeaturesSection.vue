<template>
  <div id="features">
    <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100 dark:from-gray-900" />

    <div class="relative">
      <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div class="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">

          <div class="flex h-12 w-12 items-center justify-center rounded bg-gradient-to-r from-purple-600 to-sky-600">
            <CommandLineIcon class="h-8 w-8 text-white" aria-hidden="true" />
          </div>

          <div class="mt-6">
            <h2 class="titleText dark:text-gray-300">
              {{ featured.title }}
            </h2>
            <p class="mt-4 text-lg text-gray-500 leading-6">
              {{ featured.intro }}
            </p>
            <div class="mt-6">
              <a href="/resume"
                class="inline-flex rounded border border-transparent bg-gradient-to-r from-purple-600 to-sky-600 bg-origin-border px-3 py-1.5 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-sky-700">
                My Resume
              </a>
            </div>
          </div>

          <blockquote class="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6">
            <p class="text-base text-gray-500 pb-3">
              &ldquo;{{ featured.quote }}&rdquo;
            </p>
            <footer class="mt-3 flex items-center space-x-3">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-md" :src="featured.avatar" alt="James Turner Dev" />
              </div>
              <div class="basicText">
                James Turner Dev
                <div class="text-gray-700 dark:text-gray-300 text-xs -mt-1 font-normal">
                  Front-End Developer
                </div>
              </div>
            </footer>
          </blockquote>

        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div class="-mr-48 pl-4 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <img
              class="w-full rounded-xl shadow-xl ring-opacity-0 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              :src="featured.imageOne" alt="James Turner Dev" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-20">
      <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div class="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-20 lg:px-0">
          <div>
            <div>
              <span
                class="flex h-12 w-12 items-center justify-center rounded bg-gradient-to-r from-purple-600 to-sky-600">
                <LightBulbIcon class="h-8 w-8 text-white" aria-hidden="true" />
              </span>
            </div>

            <div class="mt-6 text-gray-600 dark:text-gray-400">
              <h2 class="text-3xl font-bold tracking-tight text-gray-700 dark:text-gray-300">
                {{ featured.subTitle }}
              </h2>
              <p v-html="featured.subIntro" class="mt-4 basicText" />
              <p class="my-5 basicText"> {{ featured.coda }} </p>
              <FeaturesButton />
            </div>

          </div>
        </div>

        <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
          <div class="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              :src="featured.imageTwo" :alt="featured.title" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CommandLineIcon, LightBulbIcon } from '@heroicons/vue/24/outline'
import FeaturesButton from './FeaturesButton.vue'
import { ref } from 'vue'
const featured = ref({
  title: 'Custom, Professional, Development',
  intro: "The modern JavaScript ecosystem is complex. I can help you navigate it. I specialize in creating custom front-end interfaces to connect to your existing back-end, database, API, server, etc. I can help you plan, build, and test a custom front-end for your next big idea as well",
  quote: "If there is one thing that I do proficiently it's front-end web development.  I have worked hard to stay up to date with the latest technologies and techniques.",
  avatar: "https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/eeb15d18-603b-44ce-6716-5dad71a5c800/public",
  imageOne: "https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/a1e6ec4c-1415-42db-8ad1-fe6b86ba8a00/public",
  imageTwo: "https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/d6d4bd89-3670-4093-371f-313f7d33b100/public",
  subTitle: "White Label and Client Branding",
  subIntro: 'Almost everything I do is white label, covered by an NDA, and/or ruined by the client. So how do I show off what I do without showing off what I do? Make a few <a href = "https://linkz.network" class= "bluLink">example sites</a> and show off the code.This site is much more like the sites I build for clients than the <a href = "https://linkz.network" class="bluLink" target = "_blank" > minimal  design I usually employ</a > for my own sites.',
  coda: "These links to the sample site are a good example of how I do CRUD type projects on the front-end as well as the back-end."
})
</script>

<style scoped>
#features {
  position: relative;
  overflow: hidden;
  padding-top: 3rem;
  padding-bottom: 8rem;
}
</style>