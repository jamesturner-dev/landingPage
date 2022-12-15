<template>
  <!-- Logo Cloud -->
  <div class="bg-gray-100">
    <div class="mx-auto max-w-7xl py-10 px-5">
      <div class="border-t border-gray-200 py-6 lg:p-5">



        <p class="text-lg font-bold text-gray-500">
          This Website's Status:
        </p>

        <div class="mt-6" aria-hidden="true">
          <div class="overflow-hidden rounded-md bg-gray-200">
            <div class="h-4 rounded-sm bg-gradient-to-r from-purple-500 to-sky-500 mix-blend-multiply"
              :style="{ width: `calc((${product.step} * 2 + 1) / 8 * 100%)` }" />
          </div>
          <div class="mt-6 hidden grid-cols-4 text-base text-gray-600 sm:grid">
            <div class="text-sky-600">Site Created</div>
            <div :class="[product.step > 0 ? 'text-sky-600' : '', 'text-center']">Site Deployed</div>
            <div :class="[product.step > 1 ? 'text-sky-600' : '', 'text-center']">Site Revisions</div>
            <div :class="[product.step > 2 ? 'text-sky-600' : '', 'text-right']">Site Launch</div>
          </div>
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

