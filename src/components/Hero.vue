<template>
  <div class="bg-purple-500 overflow-x-hidden" id="home">
    <img id="animate-on-load-star-down" src="/hero/el-hero-star.svg" alt="star" class="absolute opacity-30 -z-0 left-0 bottom-0 top-[500px] md:top-[600px] lg:top-[450px] w-32 md:w-44 lg:w-52 xl:w-72 xl:top-[510px]">
    <img id="animate-on-load-starround-up" src="/hero/el-hero-round.svg" alt="star round" class="absolute opacity-40 -z-0 top-0 left-64 md:left-[450px] lg:left-[550px] w-32 md:w-48 lg:w-64 xl:w-96 xl:left-[900px] 2xl:left-[1300px]">
    <div class="flex flex-wrap" id="animate-on-load-up" >
      <div class="px-8 py-6 md:pt-32 lg:w-1/5 lg:px-12 lg:py-16 z-10 2xl:px-32">
        <div class="text-white lg:absolute lg:pr-80 xl:pr-96 lg:inset-y-1/3 lg:transform lg:-translate-y-1/3">
          <p class="text-3xl mt-16 lg:mt-0 font-bold md:text-4xl lg:text-5xl lg:pr-16 xl:text-7xl">
            Curiosity, Breakthroughs, and Limitless Ideas
          </p>
          <p class="pt-8 pb-4 md:pr-64 lg:pr-72 xl:pr-96 md:text-lg lg:text-lg md:pt-12 md:pb-10 xl:text-2xl 2xl:pt-22 2xl:pr-[550px] z-20">
             Based in London, UK. I'm currently seeking new opportunities in front-end development. I'm open to work hybrid or remotely and have flexible hours.
          </p>
          <a href="/#about">
            <button class="bg-pink-500 px-6 py-2 md:text-lg lg:text-lg hover:bg-pink-600 transition-all md:px-8 md:py-3 xl:text-xl 2xl:text-2xl font-semibold">Discover More</button>
          </a>
        </div>
      </div>
      <div class="lg:w-4/5 -z-0">
        <img src="/hero/hero.png" alt="Hero" class="-z-20 lg:w-[1000px] relative lg:bottom-0 xl:left-[140px] 2xl:left-[700px]"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-up {
  animation: animateUp 1s ease forwards;
}
@keyframes animateUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-down {
  animation: animateDown 1s ease forwards;
}
@keyframes animateDown {
  from {
    opacity: 0;
    transform: translateY(0);
  }
  to {
    opacity: 0.4;
    transform: translateY(20px);
  }
}
</style>

<script>
export default {
  mounted() {
    const animateOnLoadUp = document.getElementById("animate-on-load-up");
    animateOnLoadUp.classList.add("animate-up");

    const animateOnLoadStarroundUp = document.getElementById("animate-on-load-starround-up");
    animateOnLoadStarroundUp.classList.add("animate-up");

    const animateOnLoadDownStar = document.getElementById("animate-on-load-star-down");
    animateOnLoadDownStar.classList.add("animate-down");
  },
};
</script>