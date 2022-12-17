<template>
  <div class="relative overflow-hidden py-5 bg-gray-50 dark:bg-black dark:bg-opacity-95">
    <PageHeader :content="content" />
    <HelpQuestions />
  </div>
</template>

<script setup>
import HelpQuestions from './HelpQuestions.vue';
import PageHeader from './PageHeader.vue';
const content = [
  "Click on the question to reveal the answer",
  "Help and Support"
];
</script>

