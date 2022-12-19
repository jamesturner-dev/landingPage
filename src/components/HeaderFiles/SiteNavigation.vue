<template>
  <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
    <Popover class="relative" v-slot="{ open }">

      <PopoverButton
        :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded dark:bg-black bg-white text-base font-medium hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2']">
        <span class="p-1">Details</span>
        <ChevronDownIcon :class="[open ? 'text-gray-500' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-purple-800']"
          aria-hidden="true" />
      </PopoverButton>

      <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">

        <PopoverPanel
          class="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
          <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="relative grid gap-6 bg-white dark:bg-black px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
              <a v-for="item in details" :key="item.name" :href="item.href"
                class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-900">
                <div
                  class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-gradient-to-r from-purple-600 to-sky-600 text-white sm:h-12 sm:w-12">
                  <component :is="item.icon" class="h-8 w-8" aria-hidden="true" />
                </div>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-700">{{ item.name }}</p>
                  <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                </div>
              </a>
            </div>
          </div>
        </PopoverPanel>

      </transition>
    </Popover>

    <a href="/resume" class="p-1 cursor-pointer text-base font-medium text-gray-500 hover:text-purple-800">
      Resume
    </a>
    <a href="https://github.com/jamesturner-dev/landingPage" target="_blank"
      class="p-1 text-base font-medium text-gray-500 hover:text-purple-800">
      This Code
    </a>
    <a href="/page/help" class="p-1 cursor-pointer text-base font-medium text-gray-500 hover:text-purple-800">
      Questions?
    </a>
  </PopoverGroup>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

import {
  ChatBubbleLeftRightIcon,
  HeartIcon, QuestionMarkCircleIcon, CodeBracketIcon
} from '@heroicons/vue/24/outline'

const details = [
  {
    name: 'Custom Development',
    description: 'The modern JavaScript ecosystem is a complex. I can help you navigate it.',
    href: '/#features',
    icon: CodeBracketIcon,
  },
  {
    name: 'Frontend Stack',
    description: 'I am fairly opinionated about front-end development.',
    href: '/#stack',
    icon: HeartIcon,
  },
  {
    name: 'Message Me',
    description: "Lets talk about your project.",
    href: '/page/contact',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Knowledge Base',
    description: "Get Answers to questions.",
    href: '/page/help',
    icon: QuestionMarkCircleIcon,
  },
]
</script>