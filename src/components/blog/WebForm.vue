<template>
  <div
    class="overflow-hidden py-10 bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900">
    <div class="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-prose text-base lg:max-w-none">
        <h4 class="text-sky-600">There are no little components...</h4>
        <p class="text-3xl font-bold leading-8 tracking-tight text-gray-600 sm:text-3xl">
          The Humble Web Form
        </p>
      </div>
      <div class="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
        <p class="text-lg dark:text-gray-400 text-gray-600">
          I am an independent web dev and have been for most of my life. If there is one thing you
          can count on as a dev, it's that you will be making a web form.
        </p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
        <div class="relative z-10">
          <div class="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
            <h4 class="text-lg font-semibold text-sky-600">Web Form Submissions</h4>
            <p>
              The most common use of the web form is as a way to contact a website's owner. This
              brings up the issue of what do you do when a contact form is submitted? Traditionally
              contact forms sent a website admin an email. Maybe the forms content is also added to
              a contacts database.
            </p>
            <p class="my-5">
              This made sense back when websites ran on machines that also ran mail servers, before
              everyone went SMS, etc. These days whether you are deploying to the GCP, Linode,
              CloudFlare Pages, etc. running a mail server in a pain is the ass.
            </p>
            <h4 class="font-bold text-lg dark:text-gray-300 text-gray-700 pt-5">
              I've approached this in a number of different ways:
            </h4>
            <ul class="p-3">
              <li class="font-bold p-1">
                Firebase functions
              <li class="font-bold p-1">MailGun</li>
              <li class="font-bold p-1">Actual SMTP Mail Server</li>
              <li class="font-bold p-1">3rd Party Form End Points</li>
              </li>
            </ul>
          </div>
        </div>

        <div class="relative mx-auto mt-10 max-w-prose text-base lg:mt-0 lg:max-w-none">
          <SvgPattern />
          <BlockQuote :content="content" />
        </div>

      </div>

      <h4 class="font-bold text-lg dark:text-gray-300 text-gray-700">
        Each has its pluses and minuses.
      </h4>
      <p class="text-lg text-gray-500">
        If you are using the GCP Firebase functions are awesome. They are also overkill for a simple
        contact form. If you want to database your form submissions, perform some logic on the
        submission, etc. then Firebase Functions might be the way to go. Keep in mind that Firebase
        Functions include a good deal of overhead and will increase the size of your project.
      </p>
      <p class="text-lg text-gray-500">
        <a href="https://www.mailgun.com/" target="_blank" rel="noopener noreferrer">Mailgun</a> and
        similar services provide what I think of as virtual mail servers. You can send the content
        of
        your webform to the Mailgun API and choose what happens next. You will need to update MX
        records to choose this option.
      </p>
      <p class="text-lg text-gray-500">
        If you are scared of MX records you are free to completely skip this section. Running a mail
        server is no joke. Even admins that know all the ins and outs of a web server can get
        tripped up trying to configure a mail server. Even if you do get it set up you have to
        make sure other mail servers trust it. It is an expensive solution as well.
      </p>
      <h4 class="font-bold text-lg dark:text-gray-300 text-gray-700">
        Form Endpoints
      </h4>
      <p class="text-lg text-gray-500">
        That brings us to fourth option - third party endpoints. These are services that provide
        APIs that you can send your form data to. Basically you are subcontracting handling form
        data to a third party. I had no idea how many services like this exist. There are three
        that I can recommend:
        <a href="https://formkeep.com/" class="text-purple-600">FormKeep (formerly Formcake)</a>
      </p>
      <p class="text-lg text-gray-500 mb-10">
        I like Formkeep the best out of all web form services that I have tried so far. I signed up
        for the paid dev plan after my testing phase - in fact I am using it for the
        <a href="/page/contact" class="text-purple-600">contact me</a> for this site.
        The other 3 services that I have tried and that work as advertised are Formspree,
        99Inbound and Formcarry. I would like to recommend Form.taxi but in my case it took hours
        for the submissions to show up.
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
    'The Humble Web Form',
    'If I have to use a form allot I am going to make it as easy to use and as idiot proof as possible. I realized I was doing my users a dis-service if I put any less effort into any of the forms I created for public consumption.'
  ]
)
</script>