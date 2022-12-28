<template>
  <div class="bg-gray-50 dark:bg-black">
    <div class="relative pt-10 sm:pb-20">
      <div
        class="absolute inset-0 h-1/2 bg-gradient-to-b from-white to-gray-200 dark:from-black dark:to-gray-900 dark:bg-opacity-90" />
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl">
          <dl
            class="rounded-lg bg-gradient-to-t from-white to-gray-100 dark:from-gray-900 dark:to-black shadow-lg sm:grid sm:grid-cols-3">
            <div v-for="d in data" :key="d.title"
              class="flex flex-col border-b border-gray-100 dark:border-gray-900 p-6 text-center sm:border-0 sm:border-r">
              <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                {{ d.title }}
              </dt>
              <dd
                class="order-1 text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text pb-1 text-transparent">
                {{ d.percentage }}%
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = [
  {
    title: 'vue',
    percentage: 96.9
  },
  {
    title: 'js',
    percentage: 1.9
  },
  {
    title: 'other',
    percentage: 1.2
  }
]

</script>