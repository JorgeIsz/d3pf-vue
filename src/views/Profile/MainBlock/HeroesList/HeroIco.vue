<template>
  <div class="hero-ico">
    <span class="hero-image" :class="heroClassImg" />
    <span class="hero-name" :class="{ 'text-danger': hero.hardcore }">
      {{ hero.name }}
    </span>
    <img
      v-if="hero.seasonal"
      src="@/assets/img/leaf.png"
      width="12px"
      class="hero-seasonal"
      alt="seasonal_leaf"
    />
  </div>
</template>

<script setup>
import { computed, toRefs } from '@vue/reactivity'

const props = defineProps({
  hero: {
    type: Object,
    required: true
  }
})

const { hero } = toRefs(props)

const heroClassImg = computed(() => {
  const gender = hero.value.gender === 1 ? 'female' : 'male'
  const hardcore = hero.value.hardcore ? 'border-danger' : ''
  return `hero-${hero.value.classSlug} ${gender} ${hardcore}`
})
</script>

<style lang="stylus">
.hero-ico
  display flex
  align-items center
  vertical-align middle

  .hero-image
    width 30px
    height 26px
    display inline-block
    background-size 210%
    border 1px solid var(--va-gray)

  .hero-name
    height 24px
    display inline-block
    margin-left 2rem
    font-weight bold

  .hero-seasonal
    margin-left 2rem
</style>
