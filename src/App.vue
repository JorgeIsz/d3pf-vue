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
const init = () => {
  store.dispatch('oauth/getToken', null, { root: true })
}

const isLoading = computed(() => store.state.loading.isLoading)

init()
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #fff
  background-color #15202b
</style>
