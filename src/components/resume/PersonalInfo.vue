<template>
  <div class="mx-auto max-w-prose text-base lg:max-w-none">
    <div class="flex-none md:flex">
      <img class="mb-8 h-20 rounded-full" alt="James Turner Dev"
        src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/9ee74749-b972-442c-3dfd-de8504a74400/public" />
      <h2
        class="text-lg mt-1 ml-0 md:ml-3 font-semibold text-sky-600 border-b border-gray-200 dark:border-gray-800 mb-5">
        James T Kendall
        <div class="text-gray-400 text-sm -mb-2">
          Full Stack = Node . Express . MongoDb . Vue 3
        </div>
        <a href="mailto:james@jamesturner.dev" class="link text-sm mb-3">
          james@jamesturner.dev
        </a>
      </h2>
    </div>
    <p class="subHeadings">
      {{ blurb }}
    </p>
  </div>
  <div class="relative z-10 mx-auto leading-5 max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
    <p v-html="about" class=" text-gray-500"> </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const about = ref(
  'I like VSCode, Express, Vue, and <a href = "https://www.jetbrains.com/lp/mono/" class= "link" target = "_blank" > Jet Brains Mono. </a> I code well in Python and Javascript, can work with sql and nosql dbs, and have used multiple cloud providers. I enjoy figuring out the best way to accomplish a task.Given the opportunity I will work on each task until there is nothing else I can do to improve it.'
);

const blurb = ref(
  "I write code and manage modern dev stacks."
);
</script>