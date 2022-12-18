<template>
  <div class="w-full">
    <div class="mx-auto w-full max-w-lg rounded-2xl my-10 p-2">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 dark:bg-opacity-10 dark:text-gray-600 px-4 py-2 text-left text-sm font-medium text-purple-900  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>Can I get this code?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p class="mb-5">
            Yes, you can get the code for this site at
            <a class="text-purple-700" href="https://github.com/jamesturner-dev/landingPage">
              the github repository.</a>
          </p>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 dark:bg-opacity-10 dark:text-gray-600 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>Do you offer technical support?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p class="mb-5"> Sure. I do consulting for $100 an hour.
            You can
            <a href="https://commerce.coinbase.com/checkout/5699e4ab-924d-4ad5-affb-daf2e64afd8c"
              class="text-purple-700">click here</a> to book a session with me. I can help you with your
            project, or just answer questions about the code.
          </p>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 dark:bg-opacity-10 dark:text-gray-600 px-4 py-2 text-left text-sm font-medium text-purple-900  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>Do you only do front-end?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p class="mb-5">
            No, I'm full stack and gernally use Node, Express, and Mongo DB on the backend. I have
            been doing front-end longer and am much more fluent in it, but I can do both. I also
            have Python and Go experience.
          </p>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 dark:bg-opacity-10 dark:text-gray-600 px-4 py-2 text-left text-sm font-medium text-purple-900  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>Is this site Finished?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p class="mb-5">
            Honestly probabley not :) I'm always adding new features and fixing bugs. I'm also
            trying to hit a deadline to post this as a resume.
          </p>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 dark:bg-opacity-10 dark:text-gray-600 px-4 py-2 text-left text-sm font-medium text-purple-900  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>How can I get in touch?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p class="mb-5">
            The best way is still email. I realize it's a bit antiquated but if you want to make
            inital contact, it's your best bet. -
            <a href="mailto:james@jamesturner.dev" class="text-sky-600">
              james@jamesturner.dev
            </a>
          </p>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 dark:bg-opacity-10 dark:text-gray-600 px-4 py-2 text-left text-sm font-medium text-purple-900  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>Why do you use Vue?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p class="mb-5">
            Vue.js is very flexible and can be used in a variety of ways. It boasts excellent performance thanks to its
            lightweight nature and efficient rendering mechanism. The resulting applications are fast and responsive.
            <a href="/blog/why-vue" class="text-sky-600">Read more</a>
          </p>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 dark:bg-opacity-10 dark:text-gray-600 px-4 py-2 text-left text-sm font-medium text-purple-900  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span>Are you on social media?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p class="mb-5">
            Just Twitter -
            <a href="https://twitter.com/JamesTurnerDev" class="text-sky-600">
              @JamesTurnerDev
            </a>
          </p>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
// lets put these questions and answers in an object instead of inline as time permits
import { ChevronUpIcon } from '@heroicons/vue/20/solid'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

const help = [
  {
    question: "What is your refund policy?",
    answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
  },
  {
    question: "Do you offer technical support?",
    answer: "Did you try turning it off and back on again?"
  }
]; 
</script>
