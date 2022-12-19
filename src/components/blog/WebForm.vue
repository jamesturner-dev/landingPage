<template>
  <div class="overflow-hidden py-10 bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900">
    <div class="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-prose text-base lg:max-w-none">
        <h4 class="text-sky-600">
          There are no little components...
        </h4>
        <p class="text-3xl font-bold leading-8 tracking-tight text-gray-600 sm:text-3xl">
          The Humble Web Form
        </p>
      </div>
      <div class="relative z-10 mx-auto max-w-prose text-base lg:mx-0 lg:max-w-5xl lg:pr-72">
        <p class="text-lg text-gray-500">
          I am an independent web dev and have been for most of my life. If there is one thing you can count on as a
          dev, it's that you will be making a web form.
        </p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
        <div class="relative z-10">
          <div class="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
            <h4 class="text-lg font-semibold text-sky-600">Web Form Submissions</h4>
            <p>
              The most common use of the web form is as a way to contact a website's owner. This brings up the issue of
              what do you do when a contact form is submitted? Traditionally contact forms sent a website admin an
              email. Maybe the forms content is also added to a contacts database.
            </p>
            <p class="my-5">
              This made sense back when websites ran on machines that also ran mail servers, before everyone went SMS,
              etc. These days whether you are deploying to the GCP, Linode, CloudFlare Pages, etc. running a mail server
              in a pain is the ass.
            </p>
            <h4 class="">
              I've approached this in a number of different ways:
            </h4>
            <ul class="p-3">
              <li class="font-bold p-1">
                Firebase functions
              <li class="font-bold p-1">MailGun
              </li>
              <li class="font-bold p-1">Actual SMTP Mail Server
              </li>
              <li class="font-bold p-1">3rd Party Form End Points</li>
              </li>
            </ul>
          </div>
        </div>
        <div class="relative mx-auto mt-12 max-w-prose text-base lg:mt-0 lg:max-w-none">
          <svg
            class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
            width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20"
                patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200 dark:text-gray-800" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
          </svg>
          <blockquote class="relative rounded-lg bg-white dark:bg-black dark:bg-opacity-75 bg-opacity-60 shadow-lg">
            <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">

              <div class="relative mt-8 text-lg font-medium text-gray-700 dark:text-gray-500">
                <svg
                  class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-200 dark:text-gray-800"
                  fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path
                    d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="relative">
                  If I have to use a form allot I am going to make it as easy to use and as idiot proof as possible. I
                  realized I was doing my users a dis-service if I put any less effort into any of the forms I created
                  for public consumption.
                </p>
              </div>
            </div>
            <cite
              class="relative flex items-center rounded-b-lg bg-gradient-to-r from-purple-700 to-sky-600 py-5 px-6 not-italic sm:mt-10 sm:items-start sm:py-5 sm:pl-12 sm:pr-10">
              <span
                class="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2 sm:transform">
                <img class="h-12 w-12 rounded-full bg-indigo-300 sm:h-20 sm:w-20"
                  src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/7f23edde-534b-4a88-8642-55fc9880e300/public"
                  alt="James Turner Dev" />
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
      <h4 class="font-bold text-lg text-gray-600">
        Each has its pluses and minuses.
      </h4>
      <p class="text-lg text-gray-500">
        If you are using the GCP Firebase functions are awesome. They are also overkill for a simple contact form.
        If you want to database your form submissions, perform some logic on the submission, etc. then Firebase
        Functions might be the way to go. Keep in mind that Firebase Functions include a good deal of overhead and
        will increase the size of your project.
      </p>
      <p class="text-lg text-gray-500">
        <a href="https://www.mailgun.com/" target="_blank" rel="noopener noreferrer">Mailgun</a> and similar services
        provide what I think of as virtual mail servers. You can send the content of
        your webform to the Mailgun API and choose what happens next. You will need to update MX records to choose
        this option.
      </p>
      <p class="text-lg text-gray-500">
        If you are scared of MX records you are free to completely skip this section. Running a mail server is no
        joke. Even admins that know all the ins and outs of a web server can get tripped up trying to configure a
        mail server. Even if you do get it set up you have to make sure other mail servers trust it. It is an
        expensive solution as well.
      </p>
      <h4 class="font-bold text-lg text-gray-600">
        Form Endpoints
      </h4>
      <p class="text-lg text-gray-500">
        That brings us to fourth option - third party endpoints. These are services that provide APIs that you can
        send your form data to. Basically you are subcontracting handling form data to a third party. I had no
        idea how many services like this exist. There are three that I can recommend:
        <a href="https://formkeep.com/">FormKeep (formerly Formcake)</a>
      </p>
      <p class="text-lg text-gray-500 mb-10">
        I like Formkeep the best out of all web form services that I have tried so far. I signed up for the paid dev plan after my testing phase.
        The other 3 services that I have tried and that work as advertised are Formspree, 99Inbound and Formcarry.
        I would like to recommend Form.taxi but in my case it took hours for the submissions to show up. 
      </p>
    </div>
  </div>
</template>

<script setup>
</script>