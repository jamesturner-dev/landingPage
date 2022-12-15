<template>
  <div>
    <h3 class="text-sm font-medium text-gray-400">Trending:</h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in users" :key="item.name">
        <a :href="item.href"
          class="px-2 py-1 text-sm dark:text-gray-400 dark:hover:text-white text-gray-500 hover:text-gray-900">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const users = [
  { name: "Politics Headlines", href: "https://headlin3s.com/categories/Politics" },
  { name: "Video Links", href: "https://linkz.network/cat/video" },
  { name: "Social Media", href: "https://headlin3s.com/categories/social%20media" },
  { name: "Food Links", href: "https://linkz.network/cat/food" },
]
</script>