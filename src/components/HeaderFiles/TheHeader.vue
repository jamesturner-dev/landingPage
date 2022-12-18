<template>
  <header>
    <Popover class="relative bg-white dark:bg-black">
      <div class="mx-auto flex max-w-7xl items-center justify-between p-5 md:justify-start md:space-x-10 lg:px-8">

        <SiteBranding />

        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center rounded bg-white dark:bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-8 w-8" aria-hidden="true" />
          </PopoverButton>
        </div>

        <SiteNavigation />

        <HeaderButtons />

      </div>

      <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden">
          <div
            class="divide-y-2 divide-gray-50 dark:divide-gray-800 rounded-lg bg-white dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto"
                    src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/4ca48639-25ba-4c3a-5106-2c93c2c83100/public"
                    alt="James Turner Dev" />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="inline-flex items-center justify-center rounded bg-white dark:bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-8 w-8" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid grid-cols-1 gap-7">
                  <a v-for="item in details" :key="item.name" :href="item.href"
                    class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <div
                      class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-gradient-to-r from-purple-600 to-sky-600 text-white">
                      <component :is="item.icon" class="h-8 w-8" aria-hidden="true" />
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900 dark:text-gray-600">{{ item.name }}</div>
                  </a>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5">
              <a v-on:click="buttonHandler('sign up')"
                class="flex w-full items-center justify-center rounded border border-transparent bg-gradient-to-r from-purple-600 to-sky-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-sky-700">
                Sign In
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                <span class="pr-3">Toggle Dark Mode:</span>
                <Switch v-model="isDark" :class="isDark ? 'bg-purple-700' : 'bg-neutral-200'"
                  class="relative inline-flex h-8 w-16 items-center rounded-md">
                  <span class="sr-only">Toggle Dark Mode</span>
                  <span :class="isDark ? 'translate-x-10' : 'translate-x-1'"
                    class="inline-block h-5 w-5 transform rounded-full bg-white dark:bg-black transition" />
                </Switch>
              </p>
            </div>
          </div>

        </PopoverPanel>
      </transition>
    </Popover>
  </header>
</template>

<script setup>
import Swal from "sweetalert2";
import HeaderButtons from "./HeaderButtons.vue";
import SiteBranding from "./SiteBranding.vue";
import SiteNavigation from "./SiteNavigation.vue";
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'

import {
  Bars3Icon, XMarkIcon, ChatBubbleLeftRightIcon,
  HeartIcon, QuestionMarkCircleIcon, CodeBracketIcon
} from '@heroicons/vue/24/outline'

import { useDark } from "@vueuse/core";
import { ref } from "vue";
import { Switch } from "@headlessui/vue";

const isDark = ref(useDark());

const buttonHandler = (e) => {
  const { value: formValues } = Swal.fire({
    title: e,
    html:
      '<input id="swal-input1" class="swal2-input" type="text" placeholder="username">' +
      '<input id="swal-input2" class="swal2-input" type="password" placeholder="password">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Thank You!',
        'You are being logged in.',
        'success'
      )
    }
  })
}

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
