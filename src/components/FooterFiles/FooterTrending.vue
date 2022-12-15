<template>
  <div>
    <h3 class="text-sm font-medium text-gray-400">Trending:</h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="link in trending" :key="link.name">
        <a :href="link.href" class="px-2 py-1 text-sm text-sky-600 hover:text-white">
          {{ link.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const trending = [
  { name: "Politics Headlines", href: "https://headlin3s.com/categories/Politics" },
  { name: "Video Links", href: "https://linkz.network/cat/video" },
  { name: "Social Media", href: "https://headlin3s.com/categories/social%20media" },
  { name: "Food Links", href: "https://linkz.network/cat/food" },
]
</script>