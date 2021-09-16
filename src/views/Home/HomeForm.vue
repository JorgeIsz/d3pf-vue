<template>
  <div class="home-form">
    <div class="form-wrapper">
      <va-form ref="formElement">
        <va-input
          label="BattleTag"
          placeholder="BattleTag"
          class="mt-4"
          v-model="form.battleTag"
          :rules="[value => (value && value.length > 0) || 'Field is required']"
        />
        <va-select
          class="my-4"
          v-model="form.region"
          :options="computedRegions"
        />
        <va-button class="form__button" @click="onSumbit">Submit</va-button>
      </va-form>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, toRaw } from '@vue/reactivity'
import { regions } from '@/utils/regions'
import { useRouter } from 'vue-router'

const form = reactive({
  battleTag: '',
  region: {
    value: 'eu',
    text: 'EU'
  }
})

const formElement = ref(null)

const computedRegions = computed(() =>
  regions.map(region => ({ value: region, text: region.toUpperCase() }))
)

const router = useRouter()

const onSumbit = () => {
  formElement.validate()
  const { region, battleTag } = toRaw(form)
  router.push({
    name: 'Profile',
    params: {
      region: region.value,
      battleTag: battleTag.replace('#', '-')
    }
  })
}
</script>

<style lang="stylus">
.home-form
  display flex

.form-wrapper
  width 50%
  margin auto

.form__button
  float right
</style>
