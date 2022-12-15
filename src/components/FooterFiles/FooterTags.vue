<template>
  <div class="ml-10">
    <h3 class="text-sm font-medium text-purple-300">
      Other Sites:
    </h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="site in sites" :key="site.name">
        <a :href="site.href"
          class="px-2 text-sm dark:text-gray-400 dark:hover:text-white text-gray-500 hover:text-gray-900">
          {{ site.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const sites = [
  { name: "Headlin3s.com", href: "https://headlin3s.com" },
  { name: "Linkz Network", href: "https://linkz.network" },
  { name: "TweetOtheDay", href: "https://tweetotheday.com" },
  { name: "AmbiguousRedirect", href: "https://ambiguousredirect.com/" },
];
</script>