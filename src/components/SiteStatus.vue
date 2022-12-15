<template>
  <div class="mx-auto max-w-7xl py-10 px-5">
    <div class="border-t border-b border-gray-200 dark:border-gray-900 py-5 lg:p-5">
      <p class="mt-5 text-lg font-bold text-gray-500">
        This Website's Status:
      </p>
      <div class="mt-5 mb-5" aria-hidden="true">
        <div
          class="overflow-hidden rounded-md bg-gradient-to-r from-gray-300 to-gray-100 dark:from-gray-700 dark:to-gray-900">
          <div class="h-4 rounded-sm bg-gradient-to-r from-purple-500 to-sky-500 dark:from-purple-500 dark:to-sky-500"
            :style="{ width: `calc((${product.step} * 2 + 1) / 8 * 100%)` }" />
        </div>
        <div class="mt-6 hidden grid-cols-4 text-base text-gray-600 sm:grid">
          <div class="text-sky-600">Site Created</div>
          <div :class="[product.step > 0 ? 'text-sky-600' : '', 'text-center']">Site Deployed</div>
          <div :class="[product.step > 1 ? 'text-sky-500' : '', 'text-center']">Site Revisions</div>
          <div :class="[product.step > 2 ? 'text-sky-400' : '', 'text-right']">Site Launch</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
const product = {
  step: 1,
}
</script>

