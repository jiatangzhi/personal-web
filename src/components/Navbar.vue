<template>
  <div>
    <div class="block lg:hidden">
      <div class="w-full fixed z-50">
        <nav :class="navbarClasses">
          <div class="flex justify-between items-center px-8 py-4">
            <div class="w-1/2" @click="toggleDrawer()">
              <div class="w-6 hover:cursor-pointer">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 7a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm1 4a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3z" fill="#ffffff"></path></g></svg>
              </div>
            </div>
            <div class="w-1/2 flex justify-end">
              <a href="/#home">
                <img src="/logo.svg" alt="Logo" class="w-6">
              </a>
            </div>
          </div>
        </nav>
      </div>

      <!-- canvas -->
      <div class="bg-white w-80 h-full fixed z-50 px-8 py-4 transition-all ease-in" :class="isDrawerOpen ? 'visible-canvas' : 'hidden-canvas'">
        <div class="flex flex-col gap-y-2 text-black">
          <div class="w-9 ml-1 hover:cursor-pointer" @click="toggleDrawer">
            <svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>close-small</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="add" fill="#302895" transform="translate(134.248389, 134.248389)"> <path d="M213.333333,2.84217094e-14 L243.503223,30.1698893 L151.921,121.751 L243.503223,213.333333 L213.333333,243.503223 L121.751,151.921 L30.1698893,243.503223 L2.84217094e-14,213.333333 L91.582,121.751 L2.84217094e-14,30.1698893 L30.1698893,2.84217094e-14 L121.751,91.582 L213.333333,2.84217094e-14 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
          </div>
          <p @click="toggleDrawer" class="text-purple-500 hover:cursor-pointer hover:bg-purple-500 p-4 rounded-md hover:bg-opacity-90 hover:text-white transition-all"><a href="/#about">About</a></p>
          <p @click="toggleDrawer" class="text-purple-500 hover:cursor-pointer hover:bg-purple-500 p-4 rounded-md hover:bg-opacity-90 hover:text-white transition-all"><a href="/#skills">Skills</a></p>
          <p @click="toggleDrawer" class="text-purple-500 hover:cursor-pointer hover:bg-purple-500 p-4 rounded-md hover:bg-opacity-90 hover:text-white transition-all"><a href="/#projects">Projects</a> </p>
          <p @click="toggleDrawer" class="text-purple-500 hover:cursor-pointer hover:bg-purple-500 p-4 rounded-md hover:bg-opacity-90 hover:text-white transition-all"><a href="/#experiences">Experiences</a></p>
          <p @click="toggleDrawer" class="text-purple-500 hover:cursor-pointer hover:bg-purple-500 p-4 rounded-md hover:bg-opacity-90 hover:text-white transition-all"><a href="/#contact">Contact</a></p>
        </div>
      </div>
    </div>

    <!-- lg screen -->
    <div class="hidden lg:block">
      <div class="fixed w-full z-50">
        <nav :class="navbarClasses">
          <div class="flex items-center justify-between px-28 xl:py-8 lg:py-4">
            <div class="w-1/10">
              <a href="/#home">
                <img src="/logo.svg" alt="Logo" class="w-2/3">
              </a>
            </div>
            <div class="w-8/10">
              <div class="flex gap-x-12 xl:gap-x-20 text-white font-semibold text-md xl:text-lg hover:cursor-pointer">
                <p class="hover:text-pink-700 hover:underline hover:underline-offset-8 text-sm lg:text-md xl:text-lg 2xl:text-xl transition-all"><a href="/#about">About</a></p>
                <p class="hover:text-pink-700 hover:underline hover:underline-offset-8 text-sm lg:text-md xl:text-lg 2xl:text-xl transition-all"><a href="/#skills">Skills</a></p>
                <p class="hover:text-pink-700 hover:underline hover:underline-offset-8 text-sm lg:text-md xl:text-lg 2xl:text-xl transition-all"><a href="/#projects">Projects</a></p>
                <p class="hover:text-pink-700 hover:underline hover:underline-offset-8 text-sm lg:text-md xl:text-lg 2xl:text-xl transition-all"><a href="/#experiences">Experiences</a></p>
              </div>
            </div>
            <div class="w-1/10">
              <a href="/#contact">
                <button class="border border-white py-1 px-4 text-sm xl:text-lg 2xl:text-xl text-white font-semibold hover:bg-pink-700 hover:border-pink-700">Contact</button>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style>
.hidden-canvas {
  left: -320px;
}

.visible-canvas {
  left: 0px;
}

</style>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isDrawerOpen: false
    }
  },
  computed: {
    navbarClasses() {
      return {
        'bg-white': this.isScrolled,
        'bg-opacity-10': this.isScrolled,
        'backdrop-filter': this.isScrolled,
        'backdrop-blur-md': this.isScrolled,
        'text-white': this.isScrolled,
        'text-black': !this.isScrolled,
        'shadow-md': this.isScrolled,
        'shadow-none': !this.isScrolled,
        'transition-all': true,
        'duration-300': true
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.pageYOffset > 0
    },
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
      console.log(this.isDrawerOpen)
    },
  }
}
</script>
