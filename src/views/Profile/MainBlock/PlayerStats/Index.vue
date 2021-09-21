<template>
  <div class="multi-stats">
    <h2 class="font-diablo display-2">Stats</h2>
    <div class="stats">
      <SingleStat
        class="mb-3"
        ico-name="skull"
        ico-color="#9E9E9E"
        :info="{ value: stats.kills.monsters, text: 'Lifetime Kills' }"
      />

      <SingleStat
        class="mb-3"
        ico-name="crown"
        ico-color="#ffc107"
        :info="{ value: stats.kills.elites, text: 'Elite Kills' }"
      />

      <SingleStat
        ico-name="dungeon"
        ico-color="#795548"
        :info="{ value: stats.paragonLevel, text: 'Paragon Level' }"
      />
    </div>

    <TimePlayed :timePlayed="timePlayed" />
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { classToName } from '../../../../utils/heroClasses'
import { HeroData } from '../../../../utils/typeValidation'
import SingleStat from './SingleStat.vue'
import TimePlayed from './TimePlayed.vue'

const props = defineProps({
  stats: {
    required: true,
    type: Object
  }
})

const timePlayed = computed(() => {
  return Object.keys(props.stats.timePlayed)
    .sort()
    .map(hero => {
      return new HeroData(classToName(hero), props.stats.timePlayed[hero], hero)
    })
})
</script>

<style scoped lang="stylus">
.stats
  display flex
  flex-direction column
  padding 2rem
  background-color var(--va-secondary)
</style>
