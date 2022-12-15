<template>
  <div class="mt-12 md:mt-0 ml-5 lg:ml-0">
    <h3 class="text-sm font-medium text-gray-400">
      Articles:
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
  { name: "Ethereum Merge", href: "https://ambiguousredirect.com/ethereum-merge/" },
  { name: "The Free State?", href: "https://willfulminority.com/free-state/" },
  { name: "Python Podcasts", href: "https://aigg.blog/blog/python-podcastss" },
  { name: "The Humble webform", href: "https://aigg.blog/blog/the-web-form" },
];
</script>