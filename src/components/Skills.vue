<script setup>
import SkillCard from "../widgets/SkillCard.vue";
</script>

<template>
  <p class="relative bottom-[68px] lg:bottom-[98px]" id="skills"></p>
  <div class="bg-purple-500 relative">
    <img
      src="/skills/top-star.svg"
      alt="star element"
      class="absolute -right-10 top-10 w-40 lg:w-72 lg:-right-0 opacity-50 -z-0"
    />
    <div class="px-8 pt-8 pb-10 lg:px-20 xl:px-28 lg:py-10 2xl:px-72 2xl:pb-32">
      <p
        class="
          text-3xl text-white
          font-bold
          text-center
          lg:text-4xl
          lg:pb-8
          xl:text-5xl
          2xl:text-6xl
        "
      >
        Skills
      </p>
      
      <div class="flex flex-wrap mb-4 xl:mt-2 2xl:mt-6">
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="HTML"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="CSS"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="JavaScript"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="TypeScript"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="React"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="Flutter"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="Tailwind"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="Next"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4 z-20">
          <SkillCard
            path="/skills/php_1.png"
            alt="Python"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4 z-20">
          <SkillCard
            path="/skills/php_1.png"
            alt="R"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4 z-20">
          <SkillCard
            path="/skills/php_1.png"
            alt="C++"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="Power BI"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="Pandas"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4 z-20">
          <SkillCard
            path="/skills/php_1.png"
            alt="SQL"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="Figma"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="Trello"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="Excel"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="AWS"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="Databricks"
            hoverPath="/skills/php_2.png"
          />
        </div>
        <div class="w-1/2 md:w-1/3 lg:w-1/4">
          <SkillCard
            path="/skills/php_1.png"
            alt="Docker"
            hoverPath="/skills/php_2.png"
          />
        </div>
      </div>
    </div>
    <img
      src="/skills/bottom-star.svg"
      alt="Star"
      class="w-24 lg:w-32 xl:w-40 2xl:w-64 opacity-50 -z-0 absolute bottom-0"
    />
  </div>
</template>

<!-- flex flex-wrap -mx-4 mt-20 max-[380px]:mt-10 -->
