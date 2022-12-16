<template>

  <header>
    <Popover class="relative bg-white dark:bg-black">
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">

        <SiteBranding />

        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center rounded bg-white dark:bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-8 w-8" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded dark:bg-black bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2']">
              <span>Solutions</span>
              <ChevronDownIcon
                :class="[open ? 'text-gray-500' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']"
                aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 bg-white dark:bg-black px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                    <a v-for="item in solutions" :key="item.name" :href="item.href"
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

          <a href="/resume" class="cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900">
            Resume
          </a>
          <a href="https://github.com/jamesturner-dev/landingPage" target="_blank"
            class="text-base font-medium text-gray-500 hover:text-gray-900">
            This Code
          </a>
          <a href="/page/help" class="cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900">
            Questions?
          </a>
        </PopoverGroup>

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
                  <a v-for="item in solutions" :key="item.name" :href="item.href"
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
                Sign up
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a v-on:click="buttonHandler('sign in')" class="text-gray-900 dark:text-gray-300 cursor-pointer">
                  Sign in
                </a>
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
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

import {
  Bars3Icon, XMarkIcon, ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon, HeartIcon,
  QuestionMarkCircleIcon, CodeBracketIcon
} from '@heroicons/vue/24/outline'


const sFire = (m) => {
  Swal.fire({
    title: m,
    text: `I charge a straight $100/hour for my services.`,
    icon: 'info',
    confirmButtonText: 'Cool',

  })
}

const wFire = (w) => {
  Swal.fire({
    title: `Do you still do ${w}?`,
    text: `Yes, I still create WordPress sites for clients and agencies.  I charge a straight $100/hour for my services regardless of the platform.  I specialize in Vue but can work with any framework or CMS and have more than a decade of WP experience.`,
    icon: 'info',
    confirmButtonText: 'Cool',

  })
}

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

const solutions = [
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
    href: 'mailto:james@jamesturner.dev',
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