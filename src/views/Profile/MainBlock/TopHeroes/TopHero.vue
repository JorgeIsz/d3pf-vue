<template>
  <div class="hero-portrait-wrapper">
    <div class="hero-portrait">
      <div :class="heroClass"></div>
    </div>
    <div class="hero__info">
      <h5
        class="hero__info__nombre font-diablo"
        :class="{ 'bg-danger': hero.hardcore }"
      >
        {{ hero.name }}
        <img v-if="hero.seasonal" src="@/assets/img/leaf.png" width="12px" />
      </h5>
      <div class="hero__info__datos">
        <small class="elite-kills">
          <span class="text-monospace">{{ hero.kills.elites }}</span>
          Elite kills
        </small>
        <small class="level-circle" :class="{ 'text-danger': hero.dead }">
          {{ hero.level }}
        </small>
      </div>
    </div>
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

const heroClass = computed(() => {
  const gender = hero.value.gender === 0 ? 'male' : 'female'
  return `hero-${hero.value.classSlug} ${gender}`
})
</script>

<style lang="stylus">
.hero-portrait-wrapper
  background var(--va-secondary)
  position relative

  .title-name
    color white
    font-weight 900

  .level-circle
    width 26px
    height 26px
    padding 4px
    font-weight bold
    text-align center
    border-radius 13px
    background-color #15202b
    box-shadow 0 0 0 2px #6c757d

.hero-portrait
  display flex
  justify-content center

.hero__info
  padding 10px

.hero__info__nombre
  text-align center
  font-size 1.6rem

.hero__info__datos
  display flex
  justify-content space-between
  align-items center
  border-top 1px solid var(--va-gray)
  margin-top 1rem
  padding-top 1rem
</style>
