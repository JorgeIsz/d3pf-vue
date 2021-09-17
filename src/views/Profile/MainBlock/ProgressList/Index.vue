<template>
  <div class="progression-bosses pt-4 mt-5 border-top">
    <h2 class="font-diablo display-2">Progression</h2>
    <div class="fila">
      <div v-for="(val, key) in sortedActs" :key="key" class="lista-item">
        <div class="item">
          <ProgressItem :act="{ actNum: key, value: val }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import ProgressItem from './ProgressItem'

const props = defineProps({
  acts: {
    required: true,
    type: Object
  }
})

const sortedActs = computed(() => {
  return Object.keys(props.acts)
    .sort()
    .reduce((a, c) => {
      a[c] = props.acts[c]
      return a
    }, {})
})
</script>

<style scoped lang="stylus">
.fila
  display flex

.lista-item
  margin-right 2rem

.item
  background var(--va-secondary)
  border-radius 10px
  padding 15px 20px
</style>
