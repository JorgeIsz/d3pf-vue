<template>
  <div>
    <div class="foot-links">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <a
        href="https://github.com/baumannzone/diablo3-vue-platzi"
        target="_blank"
      >
        Github
      </a>
    </div>
  </div>
</template>

<style scoped lang="stylus">
a
  margin 0 20px
</style>
