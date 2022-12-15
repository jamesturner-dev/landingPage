<template>
  <div class="ml-10">
    <h3 class="text-sm font-medium text-gray-400">
      Other Sites:
    </h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in categories" :key="item.name">
        <a :href="item.href"
          class="px-2 text-sm dark:text-gray-400 dark:hover:text-white text-gray-500 hover:text-gray-900">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const categories = [
  { name: "Headlin3s.com", href: "https://headlin3s.com" },
  { name: "Linkz Network", href: "https://linkz.network" },
  { name: "TweetOtheDay", href: "https://tweetotheday.com" },
  { name: "AmbiguousRedirect", href: "https://ambiguousredirect.com/" },
];
</script>