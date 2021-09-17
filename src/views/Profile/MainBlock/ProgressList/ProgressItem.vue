<template>
  <div class="progress-item" :title="actTitle">
    <div class="boss-img">
      <div class="act" :class="actClass"></div>
    </div>
    <p class="progress-item__text">
      {{ fullActName }}
    </p>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity'

const acts = {
  act1: 'I',
  act2: 'II',
  act3: 'III',
  act4: 'IV',
  act5: 'V'
}
const props = defineProps({
  act: {
    required: true,
    type: Object,
    validator: obj => {
      return Object.keys(obj).length === 2
    }
  }
})

const fullActName = computed(() => {
  return `Act ${acts[props.act.actNum]}`
})
const actClass = computed(() => {
  const status = props.act.value ? 'done' : 'pending'
  return `${props.act.actNum} ${status}`
})

const actTitle = computed(() => {
  return props.act.value ? 'Act completed! 💃' : 'Act uncompleted 🙈'
})
</script>

<style lang="stylus">
.progress-item
  display flex
  flex-direction column

  .progress-item__text
    display block
    text-align center
    font-weight bold
    margin-top 10px

.boss-img
  display block

  .act
    margin 0 auto
    width 50px
    height 55px
</style>
