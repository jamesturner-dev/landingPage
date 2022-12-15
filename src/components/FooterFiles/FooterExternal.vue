<template>
  <div class="mt-12 md:mt-0">
    <h3 class="text-sm font-medium text-gray-400">
      About James:
    </h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in external" :key="item.name">
        <a :href="item.href" class="px-2 py-1 text-sm text-sky-500 hover:text-gray-900">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const external = [
  { name: "James' Resume", href: "https://cv.jamesturner.dev/" },
  { name: "James on Twitter", href: "https://twitter.com/JamesTurnerDev" },
  { name: "Why Linkz", href: "https://linkz.network/page/about" },
  { name: "Email James", href: "mailto:james@jamesturner.dev" },
]
</script>