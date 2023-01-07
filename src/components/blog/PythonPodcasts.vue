<template>
  <div
    class="overflow-hidden py-10 bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900">
    <div class="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-prose text-base lg:max-w-none">
        <h4 class="text-sky-600">
          When you just can't get enough Python
        </h4>
        <p class="text-3xl font-bold leading-8 tracking-tight text-gray-600 sm:text-3xl">
          Python Podcasts
        </p>
      </div>
      <div class="relative mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
        <p class="text-lg text-gray-600 dark:text-gray-400">
          I don't do Python day to day anymore, but it is the first programming
          language that I fell in love with. If you love it too give these podcasts a listen.
        </p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8 relative z-10">
        <div class="">
          <div class="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
            <div class="mx-auto max-w-prose text-base lg:max-w-none">
              <h4
                class="text-black dark:text-white font-semibold mt-3 hover:text-purple-600 dark:hover:text-purple-400">
                <a href="https://talkpython.fm/">Talk Python to Me</a>
              </h4>
              <p class="my-3">
                I am sure that most of you are already familiar with Talk Python To Me: A podcast on
                Python and related technologies. If not, or if you have never tuned in - stop
                reading this right now and click that link. Talk Python to Me is a casual 45
                minute conversation with industry experts hosted by Michael Kennedy. Highly
                recommended.
              </p>
              <h4
                class="text-black dark:text-white font-semibold mt-3 hover:text-purple-600 dark:hover:text-purple-400">
                <a href="https://www.pythonpodcast.com/">The Python Podcast.__init</a>
              </h4>
              <p class="my-3">
                A podcast about Python and the people who make it great. Hosted by @TobiasMacey.
                Each episode digs deep into Python technical implementation, edge cases, and lessons
                learned. Tobias ensures that you get the most value for your time spent listening.
              </p>
            </div>
          </div>
        </div>

        <div class="relative mx-auto mt-10 max-w-prose text-base lg:mt-0 lg:max-w-none">
          <SvgPattern />
          <BlockQuote :content="content" />
        </div>

      </div>

      <div class="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
        <h4
          class="text-black dark:text-white font-semibold pt-2 hover:text-purple-600 dark:hover:text-purple-400">
          <a href="https://www.stitcher.com/podcast/teaching-python">
            Now for something completely different....
          </a>
        </h4>
        <p class="my-3">
          Teaching Python is a podcast by Kelly Paredes and Sean Tibor about their adventures
          teaching middle schoolers the Python programming language.
        </p>
        <h4
          class="text-black dark:text-white font-semibold pt-5 hover:text-purple-600 dark:hover:text-purple-400">
          <a href="https://www.kennethreitz.org/import-this/">
            Import This
          </a>
        </h4>
        <p class="my-3">
          Import This is a podcast from no less than Kennneth Reitz and Alex Gaynor. They wanted
          there to be more tech podcasts. So they made our own - we should be grateful.
        </p>
        <h4
          class="text-black dark:text-white font-semibold pt-5 hover:text-purple-600 dark:hover:text-purple-400">
          <a href="https://pythonbytes.fm/">
            Python Bytes
          </a>
        </h4>
        <p class="my-3">
          Not content to publish one great Python Podcast, Michael Kennedy, along with Brian Okken,
          deliver the Python Bytes podcast directly to your earbuds. Stay up to date on Python
          developer news by subscribing to get the best Python picks delivered weekly.
        </p>
        <h4 class="font-bold text-lg text-gray-600 dark:text-gray-400 pt-5">
          Defunct Python Podcasts
        </h4>
        <p class=" text-gray-500 mb-5">
          There are a bunch of cool Python related podcasts that have not been maintained but still
          have some interesting content to listen to:
        </p>
        <ul class="text-lg text-gray-500 mb-10 list-disc ml-5 marker:text-purple-500">
          <li>
            <a href="http://frompythonimportpodcast.com/">From Python Import Podcast</a>
          </li>
          <li>
            <a href="https://djangochat.com/">Django Chat</a>
          </li>
          <li>
            <a href="http://radiofreepython.com/">Radio Free Python</a>
          </li>
          <li>
            <a href="http://frompythonimportpodcast.com/">Python for Informatics</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import SvgPattern from '../shared/SvgPattern.vue';
import BlockQuote from '../shared/BlockQuote.vue';
import { ref } from 'vue';
const content = ref(
  [
    'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/bb412629-6cff-4e5c-f658-69b49d238300/public',
    'Python Podcasts',
    'I love Podcasts. I love Python. Outside of the JRE all my favorite podcasts have something to do with Python. Here is a short list of what I think are the best Python Podcasts.'
  ]
)
</script>