<template>
  <div class="single-stat">
    <va-card style="width: 100%;">
      <va-card-content class="stat-content">
        <div class="ico-cont">
          <div class="text-center">
            <font-awesome-icon
              :icon="icoName"
              class="fa-3x"
              :style="{ color: icoColor }"
            />
          </div>
        </div>
        <div>
          <h4 class="stat-number">{{ formatNumber(info.value) }}</h4>
          <span class="text--secondary">{{ info.text }}</span>
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup>
import { formatNumber } from '@/utils/formatNumber'
import { toRefs } from '@vue/reactivity'

const props = defineProps({
  icoName: {
    required: true,
    type: String
  },
  icoColor: {
    required: true,
    type: String
  },
  info: {
    required: true,
    type: Object
  }
})

const { icoName, icoColor, info } = toRefs(props)
</script>

<style scoped lang="stylus">
.single-stat
  width 100%

  .ico-cont
    width 80px
    margin-right 10px

.stat-content
  display flex

.stat-number
  font-weight bold
  font-size 1.3rem
  margin-bottom 0
</style>
