<template>
  <div class="hero-name-level">
    <span> {{ classToName(hero.class) }} </span>
    <span>·</span>
    <span class="hero-level"> {{ hero.level }} </span>
  </div>
</template>

<script setup>
import { toRefs } from '@vue/reactivity'
import { classToName } from '../../../../utils/heroClasses'

const props = defineProps({
  hero: {
    required: true,
    type: Object
  }
})

const { hero } = toRefs(props)
</script>

<style scoped lang="stylus">
.hero-level
  font-weight bold
</style>
