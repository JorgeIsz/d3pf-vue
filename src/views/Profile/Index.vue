<template>
  <BaseLoading v-if="isLoading" />
  <h1>Profile page</h1>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { useRoute, useRouter } from 'vue-router'
import { getApiAccount } from '../../api/search'
import { setApiErr } from '../../utils/setError'

import BaseLoading from '../../components/BaseLoading.vue'

const route = useRoute()
const router = useRouter()
const { region, battleTag } = route.params

const isLoading = ref(true)
const profileData = ref(null)

getApiAccount(region, battleTag)
  .then(({ data }) => {
    profileData.value = data
  })
  .catch(err => {
    profileData.value = null
    // Creamos el objeto error
    const errObj = {
      routeParams: route.params,
      message: err.message,
      data: null,
      status: null
    }
    if (err.response) {
      errObj.data = err.response.data
      errObj.status = err.response.status
    }

    setApiErr(errObj)
    router.push({ name: 'Error' })
  })
  .finally(() => {
    isLoading.value = false
  })
</script>
