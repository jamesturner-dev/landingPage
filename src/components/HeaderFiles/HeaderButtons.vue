<template>
  <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
    <div class="pt-1">
      <Switch v-model="isDark" :class="isDark ? 'bg-gradient-to-r from-sky-600 to-purple-600' : 'bg-neutral-200'"
        class="relative inline-flex h-7 w-16 items-center rounded-md">
        <span class="sr-only">Toggle Dark Mode</span>
        <span :class="isDark ? 'translate-x-8' : 'translate-x-1'"
          class="inline-block h-6 w-7 transform rounded-md bg-white dark:bg-black transition" />
      </Switch>
    </div>
    <a v-on:click="buttonHandler('Sign In')"
      class="ml-3 inline-flex items-center justify-center whitespace-nowrap rounded border border-transparent bg-gradient-to-r from-purple-600 to-sky-600 bg-origin-border px-3 py-1 text-sm font-medium text-white shadow-sm hover:from-purple-700 hover:to-sky-700">
      Sign in
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
        'Error!',
        'We cannot log you in at this time.',
        'error'
      )
    }


  })

}
</script>