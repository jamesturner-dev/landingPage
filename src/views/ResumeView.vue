<template>
  <div class="overflow-hidden py-10 bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900">
    <div class="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-prose text-base lg:max-w-none">

        <div class="flex-none md:flex">


          <img class="mb-8 h-20 rounded-full" alt="James Turner Dev"
            src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/9ee74749-b972-442c-3dfd-de8504a74400/public" />

          <h2
            class="text-lg mt-1 ml-0 md:ml-3 font-semibold text-sky-500 border-b border-gray-200 dark:border-gray-800 mb-5">
            James T Kendall
            <div class="text-gray-400 text-sm mb-5">
              Full Stack = Node . Express . MongoDb . Vue 3
              <div><a href="mailto:james@jamesturner.dev" class="text-purple-400 opacity-70 hover:opacity-100">
                  james@jamesturner.dev</a>
              </div>
            </div>
          </h2>
        </div>

        <p class="text-xl -mb-5 font-bold leading-8 tracking-tight text-gray-600">
          I write code and manage modern dev stacks.
        </p>
      </div>
      <div class="relative z-10 mx-auto leading-5 max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
        <p class=" text-gray-500 pb-3">
          I like VSCode, Express, Vue, and
          <a href="https://www.jetbrains.com/lp/mono/" class="text-purple-400 opacity-70 hover:opacity-100"
            target="_blank">
            Jet Brains Mono.
          </a>
          I code well in Python and Javascript, can work with sql and nosql db's, and have used multiple cloud
          providers.
          I enjoy figuring out the best way to accomplish a task. Given the opportunity I will work on each task until
          there is nothing else I can do to improve it.
        </p>
      </div>
      <div class="lg:grid  lg:items-start lg:gap-8">

        <div class="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
          <svg class="absolute top-0 right-0 -mt-20 -mr-20 xl:right-0 xl:-mt-20 xl:-mr-20" width="404" height="384"
            fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20"
                patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200 dark:text-gray-900" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
          </svg>
          <blockquote class="relative rounded-lg bg-white dark:bg-black shadow-lg mr-5">
            <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div class="mx-auto flow-root max-w-4xl">
                <ul role="list" class="">
                  <li v-for="(workHistoryItem, workHistoryItemIdx) in workHistory" :key="workHistoryItem.id">
                    <div class="relative py-8">

                      <span v-if="workHistoryItemIdx !== workHistory.length - 1"
                        class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-900"
                        aria-hidden="true" />
                      <div class="relative flex items-start space-x-3">
                        <template v-if="workHistoryItem.type === 'comment'">
                          <div class="relative">
                            <img
                              class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 dark:bg-gray-800 ring-8 ring-white dark:ring-gray-900"
                              :src="workHistoryItem.imageUrl" alt="" />

                            <span
                              class="absolute -bottom-0.5 -right-1 rounded-tl bg-white dark:bg-gray-900 px-0.5 py-px">
                              <CodeBracketIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                          </div>
                          <div class="min-w-0 flex-1">
                            <div>
                              <div class="text-sm font-medium text-gray-600">
                                {{ workHistoryItem.person.name }}
                              </div>
                              <p class="mt-0.5 text-sm text-gray-500">
                                {{ workHistoryItem.date }}
                              </p>
                            </div>
                            <div class="mt-2 text-sm text-gray-700 dark:gray-400">
                              <p>{{ workHistoryItem.comment }}</p>
                            </div>
                          </div>
                        </template>





                        <template v-else-if="workHistoryItem.type === 'tags'"
                          condition="workHistoryItem.type === 'tags'">
                          <div>
                            <div class="relative px-1">
                              <div
                                class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 ring-8 ring-white dark:ring-gray-900">
                                <UserCircleIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                              </div>
                            </div>
                          </div>


                          <div class="min-w-0 flex-1 py-0">
                            <div class="text-sm leading-8 text-gray-500">
                              <span class="mr-0.5">
                                <a :href="workHistoryItem.person.href" class="font-medium text-gray-900">
                                  {{
                                      workHistoryItem.person.name
                                  }}</a>
                                {{ " " }}
                              </span>

                              <span class="whitespace-nowrap">{{
                                  workHistoryItem.date
                              }}</span>

                              <br />Skills: &nbsp;

                              {{ " " }}
                              <span class="mr-0.5">
                                <template v-for="tag in workHistoryItem.tags" :key="tag.name">
                                  <span
                                    class="relative inline-flex items-center rounded-full border border-gray-300 dark:border-gray-800 px-3 py-0.5 text-sm">
                                    <span class="absolute flex flex-shrink-0 items-center justify-center">
                                      <span :class="[tag.color, 'h-1.5 w-1.5 rounded-full']" aria-hidden="true" />
                                    </span>
                                    <span class="ml-3.5 font-medium text-gray-900 dark:text-gray-700">{{
                                        tag.name
                                    }}</span>
                                  </span>
                                  {{ " " }}
                                </template>
                              </span>
                              <br />
                              <p>
                                White label for several regional agencies when their projects went beyond
                                their internal abilities
                              </p>
                            </div>
                          </div>
                        </template>

                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section class="my-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div class="mx-auto max-w-4xl">
                <span class="font-bold text-gray-700">
                  Education:
                </span>
                <div class="mt-3 ml-3 pb-10 dark:text-gray-800 text-gray-600">
                  South Georgia College <br />
                  Pineland Academy
                </div>

              </div>
            </section>
            <cite
              class="relative flex items-center rounded-b-lg bg-gradient-to-r from-purple-700 to-sky-600 py-5 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10">
              <span
                class="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform">
                <img class="h-12 w-12 rounded-full bg-indigo-300 sm:h-20 sm:w-20"
                  src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/7f23edde-534b-4a88-8642-55fc9880e300/public"
                  alt="" />
              </span>
              <span class="relative ml-4 font-semibold leading-6 text-sky-200 sm:ml-24 sm:pl-1">
                <span class="font-semibold text-white sm:inline">James Turner Dev</span>
                {{ ' ' }}
                <span class="sm:inline">Full Stack Developer</span>
              </span>
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CommandLineIcon } from '@heroicons/vue/20/solid';
import {
  ChatBubbleLeftEllipsisIcon,
  TagIcon,
  UserCircleIcon,
  CodeBracketIcon
} from "@heroicons/vue/20/solid";
const workHistory = [
  {
    id: 1,
    type: "comment",
    person: { name: "PNZ / Atmorph", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    comment:
      "Senior Developer.  Full-stack development - creating a progressive web application. Technologies include Node, Express, Typescript, Vue 3, MongoDb and Tailwinds.",
    date: "2021-2022",
  },
  {
    id: 2,
    type: "tags",
    person: { name: "Independent Developer", href: "#" },
    tags: [
      { name: "HTML", href: "#", color: "bg-purple-400" },
      {
        name: "CSS",
        href: "#",
        color: "bg-gradient-to-r from-purple-600 to-sky-400",
      },
      {
        name: "Javascript",
        href: "#",
        color: "bg-sky-400",
      },
      {
        name: "Python",
        href: "#",
        color: "bg-sky-600",
      },
    ],
    date: "2018-2021",
  },
  {
    id: 3,
    type: "comment",
    person: { name: "Habooble", href: "#" },
    imageUrl:
      "https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/46eef8bf-3562-4362-b23a-5c3681aec500/public",
    comment: "Imagineered, developed, and deployed innovative custom web apps.  Was tasked with taking multiple concepts and turning them into reality.  Worked with clients, designers, and project managers.",

  },
  {
    id: 4,
    type: "comment",
    person: { name: "i-click Network", href: "#" },
    imageUrl:
      "https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/0b8e1569-30c7-4965-0fe5-d9785c796c00/public",
    comment: "Created and sold a banner advertising network. Responsible for everyting ( concept, planning, implinetation, servers and code ) from its genesis to it's sale.",

  },
  {
    id: 5,
    type: "comment",
    person: { name: "D2 Interactive", href: "#" },
    imageUrl:
      "https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/366ad59c-d3a0-4f28-f02e-3c7cf508a200/public",
    comment: "Co-founded what became the biggest web dev company in Mississippi at the time. We delivered six figure web apps and infrastructure for medium sized companies, universities, and organizations using PHP, MySQL / PostgreSQL, and Javascript.",
  },
];
</script>