<script setup>
import PageHeader from './PageHeader.vue';
const content = [
  "Say Hi",
  "Feel free to reach out and let me know your thoughts."
];
</script>

<template>
  <div class="relative overflow-hidden p-5">
    <div class="mx-auto max-w-prose text-lg">

      <PageHeader :content="content" />

      <div class="flex min-h-full items-center justify-center px-5">
        <div class="w-full space-y-8">

          <form class="mt-8 space-y-6" action="https://formkeep.com/f/23560d560f52" accept-charset="UTF-8"
            enctype="multipart/form-data" method="POST">
            <input type="hidden" name="utf8" value="✓">
            <div class="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="email-address" class="sr-only">Email Address</label>
                <input type="email" id="email-address" name="email" autocomplete="email" required=""
                  class="dark:bg-black dark:border-gray-900 relative mb-1 block w-full appearance-none rounded-none rounded-t-md border border-neutral-300 px-3 py-2 text-gray-600 placeholder-neutral-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                  placeholder="Your Email Address" />
              </div>
              <div>
                <label for="name" class="sr-only">Your Name</label>
                <input id="name" name="name" type="text" autocomplete="current-Name" required=""
                  class="dark:bg-black dark:border-gray-900 relative block w-full appearance-none rounded-none border border-neutral-300 px-3 py-2 text-gray-600 placeholder-neutral-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                  placeholder="Your Name" />
              </div>
              <div>
                <label for="message" class="sr-only">Message</label>
                <textarea id="message" name="message" rows="5" cols="33" required=""
                  class="dark:bg-black dark:border-gray-900 relative block w-full appearance-none rounded-none rounded-b-md border border-neutral-300 px-3 py-2 mt-1 text-gray-600 placeholder-neutral-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                  placeholder="Message" />
              </div>
            </div>

            <div>
              <button type="submit"
                class="group relative flex w-full justify-center rounded border border-transparent  py-2 px-4 text-sm font-medium text-white bg-gradient-to-r from-sky-600 to-purple-700 hover:from-purple-600 hover:to-sky-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                Say Hi
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>
