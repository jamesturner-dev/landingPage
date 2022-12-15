<template>
  <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
    <a v-on:click="buttonHandler('Sign In')"
      class="cursor-pointer whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
      Sign in
    </a>
    <a v-on:click="buttonHandler('Sign Up')"
      class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded border border-transparent bg-gradient-to-r from-purple-600 to-sky-600 bg-origin-border px-3 py-1.5 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-sky-700">
      Sign up
    </a>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'
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