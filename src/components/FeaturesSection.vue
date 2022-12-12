<template>

  <div class="relative overflow-hidden pt-16 pb-32">
    <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
    <div class="relative">
      <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div class="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
          <div>
            <div>
              <span
                class="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                <InboxIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                Custom, Professional, Development
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                The JavaScript ecosystem is a mess. I can help you navigate it.
                I specialize in creating custom front-end interfaces to connect to your
                existing back-end, database, API, server, etc. But I can help you plan,
                build, and test a custom front-end for your next big idea as well.

              </p>
              <div class="mt-6">
                <a href="#"
                  class="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700">
                  Let's Go!
                </a>
              </div>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-6">
            <blockquote>
              <div>
                <p class="text-base text-gray-500">&ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit
                  orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;</p>
              </div>
              <footer class="mt-3">
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0">
                    <img class="h-6 w-6 rounded-full"
                      src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      alt="" />
                  </div>
                  <div class="text-base font-medium text-gray-700">Marcia Hill, Digital Marketing Manager</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div class="-mr-48 pl-4 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <img
              class="w-full rounded-xl shadow-xl ring-opacity-0 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/a1e6ec4c-1415-42db-8ad1-fe6b86ba8a00/public"
              alt="James Turner Dev" />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-20 ">
      <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div class="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
          <div>
            <div>
              <span
                class="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                <SparklesIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                White Label and Client Branding
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                Almost everything I do is white label, covered by an NDA, and/or ruined by the client.
                So how do I show off what I do without showing off what I do? Make a few
                <a href="https://linkz.network" class="text-indigo-600 hover:text-indigo-500">
                  example sites
                </a> and show off the code.
              </p>
              <div class="mt-6">
                <a href="#"
                  class="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700">
                  Get More Info
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
          <div class="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
            <img
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://images.unsplash.com/photo-1602064172250-43f8909056c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80"
              alt="Customer profile user interface" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowUturnLeftIcon,
  ChatBubbleLeftEllipsisIcon,
  DocumentChartBarIcon,
  HeartIcon,
  InboxIcon,
  PencilSquareIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline'
</script>