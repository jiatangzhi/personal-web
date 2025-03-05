<template>
  <p class="relative bottom-[68px] lg:bottom-[98px]" id="about"></p>
  <img src="/about/el-planet.svg" alt="PLanet element" class="w-28 absolute right-0 lg:w-32 xl:w-52 2xl:w-64">
  <p class="text-3xl text-purple-500 pb-8 pt-8 font-bold text-center lg:hidden bg-white">About</p>
  <div class="relative px-8 py-2 md:flex md:gap-x-4 xl:gap-x-8 lg:px-20 xl:px-24 2xl:px-72 2xl:gap-x-16 lg:mt-6 bg-white">
    <div class="md:w-1/3 items-center md:justify-center">
      <img src="/about/main-pict.png" alt="Self Picture" class="w-full animate-bounce animate-bounce-slow ease-in">
    </div>
    <div class="pt-8 text-purple-500 md:w-2/3 md:text-lg lg:text-lg xl:text-2xl bg-white pb-24">
      <p class="text-white hidden lg:block lg:text-purple-500 font-bold lg:text-4xl lg:pb-8 xl:text-5xl 2xl:text-6xl hover-rectangle hover:cursor-pointer overflow-x-hidden">About</p>
      <p>Hi! I’m Jia, a Data Engineer and AI Enthusiast passionate about building scalable, data-driven solutions. My journey started in web development, where I spent 2+ years mastering React and front-end technologies, but my curiosity led me deeper into Big Data and Machine Learning.</p>
      <p class="py-4 ">Currently, I design and optimize data pipelines, develop AI-powered retrieval systems, and architect lakehouse solutions, refining my expertise in cloud-native architectures and large-scale data processing.</p>
      <p>When I’m not working with data, you’ll probably find me indulging in my love for cooking, hitting the gym, or exploring new music—always seeking creativity both in and out of code.</p>
      <br></br> <br></br>
      <p>Let’s connect and chat about all things data, AI, or even good food recommendations!</p>   
    </div>
    <img src="/about/el-star.svg" alt="Star" class="absolute bottom-0 left-0 w-44 lg:w-52 2xl:w-64">
  </div>
</template>

<style>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
}

.animate-bounce-slow {
  animation: bounce 1.8s infinite;
}

/* about hover animation */
.hover-rectangle {
    position: relative;
    display: inline-block;
  }

  .hover-rectangle:hover::before {
    content: '';
    position: absolute;
    top: 43%;
    left: -5px;
    width: calc(100% + 30px);
    height: 30%;
    transform: translateY(0%);
    background-color: rgba(149, 40, 138, 0.33);
    z-index: -1;
    animation: slide-in 0.3s ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
</style>
