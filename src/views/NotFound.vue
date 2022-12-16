<template>
  <div class="py-20 px-5 grid place-items-center dark:bg-gradient-to-r dark:from-black dark:to-gray-900">
    <main class="mx-auto max-w-max sm:flex">
      <p class="responseCode bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text pb-1 text-transparent "> 404 </p>
      <div class="ml-5">
        <ContentHeading :content="content" />
        <BigButtons />
      </div>
    </main>
  </div>
</template>

<script setup>
import BigButtons from "../components/shared/BigButtons.vue";
import ContentHeading from "../components/shared/ContentHeading.vue";

const content = [
  {
    type: "h1",
    text: "Page not found",
  },
  {
    type: "p",
    text: "Please check the URL in the address bar and try again.",
  },
];
</script>
