<template>
  <div class="relative overflow-hidden py-5 bg-gray-50 dark:bg-black">
    <PageHeader :content="content" />
    <HelpQuestions />
  </div>
</template>

<script setup>
import HelpQuestions from './HelpQuestions.vue';
import PageHeader from './PageHeader.vue';
const content = [
  "Click on the question to reveal the answer",
  "JTD Q&A"
];
</script>

