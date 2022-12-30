<template>
  <img class="h-24 mb-5 mx-auto"
    src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/794827e6-86ba-4863-23eb-bbfdf688f200/public" />
  <h1>
    <span
      class="bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-xl font-black tracking-tight text-transparent selection:bg-transparent block text-center">
      {{ content[0] }}
    </span>
    <span class="mb-2 block text-center basicText">
      {{ content[1] }}
    </span>
  </h1>
</template>

<script setup>
defineProps({
  content: {
    type: Array,
    required: true,
  },
});
</script>
