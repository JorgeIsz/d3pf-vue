<template>
  <LoadLayout v-if="isLoading">
    <BaseLoading />
  </LoadLayout>

  <MainLayout v-else />
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import BaseLoading from './components/BaseLoading.vue'
import LoadLayout from './layouts/LoadLayout.vue'
import MainLayout from './layouts/MainLayout.vue'

const store = useStore()
store.dispatch('oauth/getToken', null, { root: true })

const isLoading = computed(() => store.state.loading.isLoading)
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #fff
  background-color #15202b
  min-height 100vh
  padding 50px
</style>
