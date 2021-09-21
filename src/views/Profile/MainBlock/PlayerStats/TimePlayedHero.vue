<template>
  <div class="progress-time-played">
    <div class="progress-hero-info">
      <h5 class="hero-name">{{ heroTime.hero }}</h5>
      <va-badge :text="time" color="dark"></va-badge>
    </div>
    <va-progress-bar :model-value="time" :color="heroColor"></va-progress-bar>
  </div>
</template>
<script setup>
import { HeroData } from '@/utils/typeValidation'
import { computed, toRefs } from '@vue/reactivity'

const props = defineProps({
  // Definimos la propiedad con el tipo personalizado 'HeroData'
  heroTime: {
    type: HeroData,
    required: true
  }
})

const { heroTime } = toRefs(props)

const heroesBgColors = {
  barbarian: '#4e1c16',
  crusader: '#795548',
  monk: '#ff9800',
  necromancer: '#00bcd4',
  wizard: '#3f51b5',
  'witch-doctor': '#8bc34a',
  'demon-hunter': '#F44336'
}

const heroColor = computed(() => {
  return heroesBgColors[heroTime.value.classSlug]
})

const time = computed(() => (heroTime.value.time * 100).toFixed(2))
</script>

<style scoped lang="stylus">
.progress-time-played
  margin-bottom 25px

.progress-hero-info
  display flex
  justify-content space-between
  margin-bottom 7px

  .hero-name
    font-weight light
</style>
