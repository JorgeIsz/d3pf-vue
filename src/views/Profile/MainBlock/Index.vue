<template>
  <div class="grid-container">
    <div class="grid-item item-left">
      <TopHeroes v-if="hasHeroes" :heroes="topHeroes" />
      <HeroesList v-if="hasHeroesList" :heroes="heroesList" />
      <ProgressList :acts="props.profileData.progression" />
    </div>
    <div class="grid-item item-right">
      <PlayerStats :stats="statsData" />
    </div>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import TopHeroes from './TopHeroes/Index.vue'
import HeroesList from './HeroesList/Index.vue'
import ProgressList from './ProgressList/Index.vue'
import PlayerStats from './PlayerStats/Index.vue'

const props = defineProps({
  profileData: {
    type: Object,
    required: true
  }
})

const hasHeroes = computed(() => props.profileData.heroes.length > 0)
const topHeroes = computed(() => props.profileData.heroes.slice(0, 3))

const hasHeroesList = computed(() => props.profileData.heroes.length > 3)
const heroesList = computed(() =>
  props.profileData.heroes.slice(3, props.profileData.heroes.length)
)

const statsData = computed(() => {
  const { paragonLevel, kills, timePlayed } = props.profileData
  return { paragonLevel, kills, timePlayed }
})
</script>

<style scoped lang="stylus">
.grid-container
    display grid
    grid-template-columns 1fr
    grid-column-gap 40px

    .grid-item
      &.item-left
        grid-column span 1

      &.item-right
        grid-column span 1

  @media (min-width: 992px)
    .grid-container
      display grid
      grid-template-columns repeat(6, 1fr)

      .grid-item
        &.item-left
          grid-column span 4

        &.item-right
          grid-column span 2
</style>
