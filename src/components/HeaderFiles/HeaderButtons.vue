<template>
  <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
    <div>
      <Switch v-model="isDark" :class="isDark ? 'bg-purple-700' : 'bg-neutral-200'"
        class="relative inline-flex h-6 w-11 items-center rounded-full">
        <span class="sr-only">Toggle Dark Mode</span>
        <span :class="isDark ? 'translate-x-6' : 'translate-x-1'"
          class="inline-block h-4 w-4 transform rounded-full bg-white dark:bg-black transition" />
      </Switch>
    </div>
    <a v-on:click="buttonHandler('Sign Up')"
      class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded border border-transparent bg-gradient-to-r from-purple-600 to-sky-600 bg-origin-border px-3 py-1 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-sky-700">
      Sign up
    </a>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'
import { useDark } from "@vueuse/core";
import { ref } from "vue";
import { Switch } from "@headlessui/vue";
const isDark = ref(useDark());

const buttonHandler = (e) => {

  const { value: formValues } = Swal.fire({
    title: e,
    html:
      '<input id="swal-input1" class="swal2-input" type="text" placeholder="username">' +
      '<input id="swal-input2" class="swal2-input" type="password" placeholder="password">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Thank You!',
        'You are being logged in.',
        'success'
      )
    }


  })

}
</script>