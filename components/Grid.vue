<template>
  <section>
    <!-- Transform -->
    <div class="lg:grid-cols-2 grid">
      <div
        class="content-image bg-transform-mobile lg:bg-transform-desktop lg:order-last"
      ></div>
      <div class="content">
        <h2>Transform your brand</h2>
        <p class="text-accent-300 my-5">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <NuxtLink
          to="#"
          class="after:bg-primary-yellow/40 hover:after:bg-primary-yellow learn-more"
        >
          Learn more
        </NuxtLink>
      </div>
    </div>
    <!-- End of Transform -->
    <!-- Stand out -->
    <div class="lg:grid-cols-2 grid">
      <div
        class="content-image bg-standout-mobile lg:bg-standout-desktop"
      ></div>
      <div class="content">
        <h2>Stand out to the right audience</h2>
        <p class="text-accent-300 my-5">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <NuxtLink
          to="#"
          class="after:bg-primary-red/40 hover:after:bg-primary-red learn-more"
        >
          Learn more
        </NuxtLink>
      </div>
    </div>
    <!-- End of Stand out -->
    <div class="lg:grid-cols-2 grid">
      <!-- Graphic Design -->
      <div
        class="services bg-graphic-mobile lg:bg-graphic-desktop text-primary-cyan"
      >
        <div class="services-content">
          <h2 class="font-serif text-3xl font-black">Graphic Design</h2>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <!-- End of Graphic Design -->
      <!-- Photography -->
      <div
        class="services bg-photography-mobile lg:bg-photography-desktop text-primary-blue"
      >
        <div class="services-content">
          <h2 class="font-serif text-3xl font-black">Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
      <!-- End of Photography -->
    </div>
  </section>
</template>
