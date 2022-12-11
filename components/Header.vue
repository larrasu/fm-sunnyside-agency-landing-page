<template>
  <header>
    <div class="py-7 flex items-center justify-between px-5">
      <div class="shrink-0">
        <img src="~/assets/images/logo.svg" alt="Sunnyside" />
      </div>
      <nav class="lg:flex hidden gap-6">
        <div v-for="item in menu" :key="item.name" class="text-white">
          <NuxtLink :to="item.link">
            {{ item.name }}
          </NuxtLink>
        </div>
        <div>
          <NuxtLink
            to="#contact"
            class="px-7 text-accent-100 hover:bg-white/30 hover:text-white py-4 font-serif uppercase transition bg-white rounded-full"
          >
            Contact
          </NuxtLink>
        </div>
      </nav>
      <div class="lg:hidden">
        <button @click="showMenu = !showMenu">
          <span class="sr-only">Open menu</span>
          <img src="~/assets/images/icon-hamburger.svg" alt="Menu" />
        </button>
      </div>
    </div>
    <!-- Menu -->
    <div
      class="absolute h-0 px-5 transition-all"
      :class="showMenu ? 'h-full opacity-100' : 'h-0 opacity-0'"
    >
      <div
        class="text-accent-300 w-80 relative px-5 py-10 mx-auto text-xl text-center bg-white"
        :class="showMenu ? 'block' : 'hidden'"
      >
        <div
          class="absolute -top-5 right-0 w-0 h-0 bg-transparent border-[20px] border-r-white border-transparent"
        ></div>
        <nav class="grid gap-8">
          <div v-for="item in menu" :key="item.name">
            <NuxtLink :to="item.link">
              {{ item.name }}
            </NuxtLink>
          </div>
          <div class="mt-2">
            <NuxtLink
              to="#contact"
              class="bg-primary-yellow px-7 py-4 font-serif text-sm text-black uppercase rounded-full"
            >
              Contact
            </NuxtLink>
          </div>
        </nav>
      </div>
    </div>
    <!-- End of Menu -->
  </header>
</template>

<script setup>
const showMenu = ref(false);

const menu = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Projects",
    link: "#projects",
  },
];
</script>
