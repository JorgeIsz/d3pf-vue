<template>
  <footer class="footer-bar">
    <PoweredByFoot :icons="icons" />

    <hr class="footer-bar__divider" />

    <div class="footer__links">
      <div class="">
        <FootLinks />
      </div>
      <div class="">
        <MadeByFoot />
      </div>
    </div>
  </footer>
</template>

<script setup>
import MadeByFoot from './MadeByFoot'
import FootLinks from './FootLinks'
import PoweredByFoot from './PoweredByFoot.vue'

const icons = [
  {
    classes: ['fab', 'vuejs'],
    color: '#4fc08d',
    href: 'https://vue.js.org/'
  },
  {
    classes: ['fab', 'battle-net'],
    href: 'https://develop.battle.net/documentation/diablo-3/community-apis'
  },
  {
    classes: ['fab', 'github'],
    color: '#e4e4e4',
    href: 'https://github.com/baumannzone'
  },
  {
    classes: ['fab', 'font-awesome'],
    color: '#0e95ff',
    href: 'https://fontawesome.com/'
  }
]
</script>
<style lang="stylus">
.footer-bar
  margin-top 5rem

.footer-bar__divider
  margin: 5rem 0

.footer__links
  display flex
  justify-content space-between
</style>
