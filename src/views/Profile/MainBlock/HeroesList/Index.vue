<template>
  <div>
    <div class="va-table-responsive">
      <table class="va-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Elite Kills</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="heroe in props.heroes" :key="heroe.id">
            <td><HeroIco :hero="heroe" /></td>
            <td>
              <HeroClassLevel
                :hero="{ class: heroe.class, level: heroe.level }"
              />
            </td>
            <td>{{ formatNumber(heroe.kills.elites) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import HeroIco from './HeroIco.vue'
import HeroClassLevel from './HeroClassLevel.vue'
import { formatNumber } from '../../../../utils/formatNumber'

const props = defineProps({
  heroes: {
    required: true,
    type: Array
  }
})
</script>

<style scoped lang="stylus">
.va-table-responsive
  margin-top 4rem
  background-color var(--va-secondary)

.va-table
  width 100%
</style>
