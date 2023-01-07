<template>
  <blockquote
    class="relative rounded-lg bg-white dark:bg-black dark:bg-opacity-75 bg-opacity-60 shadow-lg">
    <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
      <img :src="content[0]" :alt="content[1]" class="h-8" />
      <div class="relative mt-8 text-lg font-medium text-gray-700 dark:text-gray-500">
        <svg
          class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200 dark:text-gray-800"
          fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path
            d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p class="relative">
          {{ content[2] }}
        </p>
      </div>
    </div>
    <cite
      class="relative flex items-center rounded-b-lg bg-gradient-to-r from-purple-700 to-sky-600 py-5 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10">
      <span
        class="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform">
        <img class="h-12 w-12 rounded-full bg-indigo-300 sm:h-20 sm:w-20"
          src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/7f23edde-534b-4a88-8642-55fc9880e300/public"
          alt="" />
      </span>
      <span class="relative ml-4 font-semibold leading-6 text-sky-200 sm:ml-24 sm:pl-1">
        <span class="font-semibold text-white sm:inline">James Turner Dev</span>
        {{ ' ' }}
        <span class="sm:inline">Full Stack Developer</span>
      </span>
    </cite>
  </blockquote>
</template>

<script setup>
defineProps({
  content: {
    type: Array,
    required: true,
  },
});
</script>