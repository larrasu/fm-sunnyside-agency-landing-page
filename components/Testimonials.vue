<template>
  <section
    class="text-accent-200 lg:max-w-6xl lg:mx-auto px-5 py-40 text-center"
  >
    <h1 class="text-accent-400 font-serif tracking-widest uppercase">
      Client Testimonials
    </h1>
    <div class="lg:flex-row flex flex-col items-center gap-16 mt-16">
      <div v-for="testi of testimonials" class="grid gap-6">
        <div>
          <img
            :src="testi.image"
            :alt="`Image of ${testi.name}`"
            class="w-16 mx-auto rounded-full"
          />
        </div>
        <div>
          <p>{{ testi.testimonial }}</p>
        </div>
        <div>
          <h2 class="text-accent-100 font-serif font-black">
            {{ testi.name }}
          </h2>
          <h3 class="text-accent-400 mt-2 text-sm">{{ testi.position }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: "Emily R.",
    position: "Marketing Director",
    testimonial:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    image: "/images/image-emily.jpg",
  },
  {
    name: "Thomas S.",
    position: "Chief Operating Officer",
    testimonial:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    image: "/images/image-thomas.jpg",
  },
  {
    name: "Jennie F.",
    position: "Business Owner",
    testimonial:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    image: "/images/image-jennie.jpg",
  },
];
</script>
