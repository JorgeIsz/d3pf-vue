<template>
  <div class="main-layout">
    <HeaderBar />
    <router-view />
    <FooterBar />
  </div>
</template>

<script setup>
import HeaderBar from '../components/HeaderBar/Index.vue'
import FooterBar from '../components/FooterBar/Index.vue'
</script>

<style scoped lang="stylus">
.main-layout
  max-width: 1400px
  margin auto
</style>
