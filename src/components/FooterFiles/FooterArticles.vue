<template>
  <div class="mt-12 md:mt-0 ml-5 lg:ml-0">
    <h3 class="text-sm font-medium text-gray-400">
      Articles:
    </h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="article in articles" :key="article.name">
        <a :href="article.href" class="px-2 text-sm  text-purple-400 hover:text-white">
          {{ article.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const articles = [
  { name: "Why Vue", href: "/blog/why-vue" },
  { name: "Fast Websites", href: "/blog/fast-websites" },
  { name: "Python Podcasts", href: "/blog/python-podcasts" },
  { name: "The Humble webform", href: "/blog/web-form" },
];
</script>