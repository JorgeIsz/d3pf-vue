<template>
  <div class="top-heroes">
    <!-- Título con nuestra fuente Diablo-like -->
    <h2 class="top-heroes__title font-diablo">Top Heroes</h2>
    <!-- 3 columnas, una para cada TopHero -->
    <div class="top-heroes__list">
      <!-- No te olvides de poner el `key` cuando uses v-for -->
      <div sm="4" v-for="hero in heroes" :key="hero.id">
        <!-- TopHero con datos como prop -->
        <TopHero :hero="hero" />
      </div>
    </div>
  </div>
</template>

<script setup>
import TopHero from './TopHero.vue'

defineProps({
  heroes: {
    required: true,
    type: Array
  }
})
</script>

<style lang="stylus">
.top-heroes__title
  font-size 2rem
  margin-top 3rem
  margin-bottom 2rem

.top-heroes__list
  display grid
  grid-template-columns repeat(3, 1fr)
  grid-column-gap 25px
</style>
