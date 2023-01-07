<template>
  <div
    class="overflow-hidden py-10 bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900">
    <div class="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-prose text-base lg:max-w-none">
        <h4 class="text-sky-600">
          Why I choose VueJs as my prefered framework
        </h4>
        <p class="text-3xl font-bold leading-8 tracking-tight text-gray-600 sm:text-3xl">
          What makes Vue different
        </p>
      </div>
      <div class="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
        <p class="text-lg text-gray-500">
          Javascript frameworks are hot right now and widely regarded as one of the best ways of
          developing front-end applications. With all these choices at our fingertips, why use Vue?
        </p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
        <div class="relative z-10">
          <div class="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
            <h2 class="text-xl font-semibold text-sky-600">
              What is VueJs?
            </h2>
            <p class="mb-5">
              VueJs is a Javascript framework that allows developers
              to create front end web applications. With VueJs, developers can create Vue
              components which are reusable. VueJs provides two-way data binding which
              means that data can be changed in real-time without having to reload the page.
            </p>
            <h4 class="text-lg font-semibold text-sky-600">Pros of using Vue</h4>
            <ul role="list" class="mb-5 ml-2 mt-2">
              <li>It is lightweight and easy to learn</li>
              <li>You can use it for both small and large projects.</li>
              <li>The performance is good to great.</li>
              <li>It has a helpful community behind it.</li>
              <li>Easy to integrate, can even use it from a CDN.</li>
              <li>Effective state management with Pinia</li>
            </ul>
            <h4 class="text-lg font-semibold text-sky-600">Cons of using Vue</h4>
            <ul role="list" class="mb-5 ml-2 mt-2">
              <li>Not the most popular framework</li>
              <li>It doesn't have as many features as some of the other frameworks</li>
            </ul>
            <p>
              Vue.js is simple to get started with. It has a small learning curve and is easier to
              pick up for newcomers to front-end development. That said, it is also powerful enough
              to be used for large-scale front-end's while remaining performant.
            </p>
            <p class="my-5">
              Vue.js is very flexible and can be used in a variety of ways.
              It boasts excellent performance thanks to its lightweight nature and efficient
              rendering mechanism. The resulting applications are fast and responsive.
            </p>
          </div>

        </div>

        <div class="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
          <SvgPattern />
          <BlockQuote :content="content" />
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import SvgPattern from '../shared/SvgPattern.vue';
import BlockQuote from '../shared/BlockQuote.vue';
import { ref } from 'vue';
const content = ref(
  [
    'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/bb412629-6cff-4e5c-f658-69b49d238300/public',
    'VueJs',
    'VueJs is a framework that is both lightweight and flexible. It is easy to learn and can be used for both small and large projects. Imho VueJs provides the perfect balance between power and simplicity.'
  ]
)
</script>