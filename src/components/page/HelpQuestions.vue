<template>
  <div class="w-full">
    <div class="mx-auto w-full max-w-lg rounded-2xl my-10 p-2">

      <Disclosure v-slot="{ open }" v-for="h in help" :key="h.id">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 dark:bg-opacity-10 dark:text-gray-600 mb-1 px-4 py-2 text-left text-sm font-medium text-purple-900  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <span> {{ h.question }} </span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500" />
        </DisclosureButton>
        <DisclosurePanel class="p-5 pb-2 text-sm text-gray-500">
          <p v-html="h.answer" class="mb-5"> </p>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>

import { ChevronUpIcon } from '@heroicons/vue/20/solid'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

const help = [
  {
    id: 1,
    question: "Can I get this code?",
    answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
  },
  {
    id: 2,
    question: "Do you offer technical support?",
    answer: 'Sure. I do consulting for $100 an hour. You can <a href="https://commerce.coinbase.com/checkout/5699e4ab-924d-4ad5-affb-daf2e64afd8c" class="text-purple-700">click here</a> to book a session with me. I can help you with your project, or just answer questions about the code.'
  },
  {
    id: 3,
    question: "Do you only do front-end?",
    answer: "No, I'm full stack and gernally use Node, Express, and Mongo DB on the backend. I have been doing front-end longer and am much more fluent in it, but I can do both. I also have Python and Go experience."
  },
  {
    id: 4,
    question: "Is this site Finished?",
    answer: "Honestly probabley not :) I'm always adding new features and fixing bugs. I'm also trying to hit a deadline to post this as a resume."
  },
  {
    id: 5,
    question: "How can I get in touch?",
    answer: 'The best way is still email. I realize it is a bit antiquated but if you want to make inital contact, it is your best bet. - <a href="mailto:james@jamesturner.dev" class="text-purple-700">james@jamesturner.dev</a>'
  },
  {
    id: 6,
    question: "Why do you use Vue?",
    answer: "Vue.js is very flexible and can be used in a variety of ways. It boasts excellent performance thanks to its lightweight nature and efficient rendering mechanism. The resulting applications are fast and responsive. <a href='/blog/why-vue' class='text-purple-700'>Read more</a>"
  },
  {
    id: 7,
    question: "Are you on social media?",
    answer: "Just Twitter - <a href='https://twitter.com/JamesTurnerDev' class='text-purple-700'>@JamesTurnerDev</a>"
  }
]; 
</script>
