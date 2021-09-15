<template>
  <div>
    <div class="foot-links">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link
        to="https://github.com/baumannzone/diablo3-vue-platzi"
        target="_blank"
      >
        Github
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="stylus">
a
  margin 0 20px
</style>
