<template>
  <div class="ml-10">
    <h3 class="text-sm font-medium text-purple-300">
      Other Sites:
    </h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="site in sites" :key="site.name">
        <a :href="site.href" class="px-2 text-sm text-purple-400 hover:text-white">
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