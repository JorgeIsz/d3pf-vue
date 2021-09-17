<template>
  <div class="top-heroes">
    <!-- Título con nuestra fuente Diablo-like -->
    <h2 class="display-2 font-diablo">Top Heroes</h2>
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
.top-heroes__list
  display grid
  grid-template-columns repeat(3, 1fr)
  grid-column-gap 25px
</style>
