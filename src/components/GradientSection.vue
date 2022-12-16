<template>
  <div id="stack" class="bg-gradient-to-r from-purple-800 to-sky-700">
    <div class="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-15">
      <h2 class="border-b border-purple-500 text-3xl font-bold tracking-tight text-white">
        I admit, I am fairly opinionated about front-end development...
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
  ArrowUturnLeftIcon,
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
    description: 'If I had to pick one framework to use for the rest of my life, it would be Vue. It is fast, easy to learn, and has a great community.',
    icon: HeartIcon,
  },
  {
    name: 'Tailwind CSS',
    description: 'I love Tailwind. It is a utility-first CSS framework that makes it easy to build beautiful, responsive layouts.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Visual Studio Code',
    description: 'I use VS Code for all my development. It is fast, extensible, and has a great community.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Vite',
    description: 'Vite is a build tool that makes it easy to develop Vue applications. It is fast, easy to use, and has a great community.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'GitHub',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ShareIcon,
  },
  {
    name: 'Prettier',
    description: 'Prettier is a code formatter that makes it easy to keep your code clean and consistent.',
    icon: SparklesIcon,
  },
  {
    name: 'FormKit',
    description: 'Why build forms from scratch when you can use FormKit? It is a Vue component library that makes it easy to build forms.',
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: 'Heroicons',
    description: 'Heroicons is a set of SVG icons that are easy to use and look great. I use them in my projects all the time.',
    icon: FireIcon,
  },
]


</script>