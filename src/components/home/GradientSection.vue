<template>
  <div id="stack" class="bg-gradient-to-r from-purple-800 to-sky-700">
    <div class="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-15">
      <h2 class="border-b mr-10 border-purple-400 text-3xl font-bold tracking-tight text-white">
        I am fairly opinionated about front-end development...
      </h2>
      <p class="mt-4 max-w-3xl text-lg text-purple-100">
        Half the battle these days is getting the right tools in place.
        I use the following tools to build and deploy my projects.
      </p>
      <div
        class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
        <div v-for="feature in features" :key="feature.name">
          <div>
            <span class="flex h-12 w-12 items-center justify-center rounded bg-white bg-opacity-10">
              <component :is="feature.icon" class="h-8 w-8 text-white" aria-hidden="true" />
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-white">
              {{ feature.name }}
            </h3>
            <p class="mt-2 text-base text-purple-200">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

import {
  ChatBubbleLeftEllipsisIcon,
  FireIcon,
  CodeBracketIcon,
  HeartIcon,
  Cog6ToothIcon,
  PencilSquareIcon,
  ShareIcon,
  SparklesIcon,
} from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Vue 3',
    description: 'Vue is framework of choice. It is fast, easy to learn, and has a great community.',
    icon: HeartIcon,
  },
  {
    name: 'Tailwind CSS',
    description: 'Tailwind is a utility-first CSS framework that makes it easy to build beautiful, responsive layouts.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Visual Studio Code',
    description: 'I use VS Code for all my development. It is fast, extensible, and has a great community.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Vite',
    description: 'Vite is a build tool that makes it easy to develop Vue ( and other ) applications.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'GitHub',
    description: 'I use GitHub to host my projects. It is a great place to collaborate with others and share your work.',
    icon: ShareIcon,
  },
  {
    name: 'Prettier',
    description: 'Prettier is a code formatter that makes it easy to keep your code clean and consistent.',
    icon: SparklesIcon,
  },
  {
    name: 'FormKit',
    description: 'Why build forms from scratch? FormKit is a Vue component that makes it easy to build forms.',
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: 'Heroicons',
    description: 'Heroicons is a set of SVG icons that are easy to use and look great. I use them in my projects all the time.',
    icon: FireIcon,
  },
]

</script>
