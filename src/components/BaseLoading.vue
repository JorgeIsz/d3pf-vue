<template>
  <div class="loader">
    <va-progress-circle class="loader__circle" size="200px" indeterminate />
    <h1>Loading...</h1>
  </div>
</template>

<style lang="stylus">
.loader
  display flex
  flex-direction column
  align-items center
  padding 20px 0

.loader__circle
  margin: 20px 0
</style>
