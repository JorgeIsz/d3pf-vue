<template>
  <div class="powered-by">
    <p class="powered-by__text text--secondary">Powered by</p>

    <ul class="icons-list">
      <li
        class="icon-wrapper"
        v-for="(icon, index) in props.icons"
        :key="index"
      >
        <a :href="icon.href" target="_blank" :title="icon.href">
          <font-awesome-icon
            :icon="icon.classes"
            class="fa-lg"
            :style="{ color: icon.color }"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  icons: {
    required: true,
    type: Array
  }
})
</script>
<style scoped lang="stylus">
.powered-by
  text-align center
  display flex
  flex-direction column

.powered-by__text
  margin-bottom: 50px

.icons-list
  display flex
  margin auto

.icon-wrapper
  margin: 0 20px
</style>
