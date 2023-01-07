<template>
  <div
    class="overflow-hidden py-10 bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900">
    <div class="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">

      <div class="mx-auto max-w-prose text-base lg:max-w-none">
        <h4 class="text-sky-600">
          Why do you focus so much on website speed?
        </h4>
        <p class="text-3xl font-bold leading-8 tracking-tight text-gray-500 sm:text-3xl">
          Fast Websites
        </p>
      </div>

      <div class="relative mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
        <p class="text-lg text-gray-700 dark:text-gray-300">
          If your website takes too long to load and has sluggish performance most people won't
          stick around to see your content.
        </p>
      </div>

      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8 relative z-10">
        <div class="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">

          <p>
            That is why, imho, website speed is fundamental.
            What good is a great looking website if almost nobody waits for it to load?
          </p>

          <p class="my-5">
            Even in the age of super fast broadband and 5G, loading a very heavy site on a mobile
            device can be excruciating. I have worked with agencies that create beautiful
            WordPress websites that take 30 seconds to load. That might not sound like a long
            time but slowly count to 30.
          </p>

          <p class="mt-10 mb-5 font-semibold text-gray-700 dark:text-gray-400">
            Imagine staring at your phone looking at a spinner…
          </p>

          <p>
            I'm have often been hired to fix these kinds of sites. However without some serious
            compromises the best I can often do is tinker around the edges. To build a site that
            is very robust you have to take a holistic approach. Even still, I can often speed up
            these behemoths by using next gen image formats, deferring JavaScript, removing
            unnecessary CSS, etc.
          </p>

          <p class="mt-5">
            But the real magic happens when all of the pieces ( hosting,
            front-end, back-end, database, etc. ) work together.
            It starts with choosing the hosting for your site. Some people try to save money by
            hosting their site on bargain hosting providers like Hostgator but this is never a
            good idea. You cannot build fast websites on a slow, shared, server.
          </p>

        </div>

        <div class="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
          <SvgPattern />
          <BlockQuote :content="content" />
        </div>

      </div>

      <h4 class="pt-5 font-semibold text-gray-700 dark:text-gray-400">
        Content Management Systems
      </h4>

      <p class="text-gray-500">
        The next mistake people make is choosing a CMS like WordPress and loading it with plugins
        and page-makers. It's is possible to build a fast WordPress site but they are few and far
        between in the real world. Most people that use WordPress pick a heavy theme, use a page
        builder like Elementor, and load up on plugins. Each layer adds to the sites footprint and
        makes it slower. Add that to having to make database calls for each page view to a shared
        MySQL server and it's easy to see why WP sites are generally so slow.
      </p>

      <p class="text-gray-500 pb-5">
        Hosting a modern framework on a scale-able cloud service provides a night and day comparison
        in terms of speed.
      </p>

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
    'Fast Websites',
    'Of course a website needs to look great, have good content, and provide a high quality user experience. If the site does not load fast enough however, most users will never see the content because they will bounce.'
  ]
)
</script>