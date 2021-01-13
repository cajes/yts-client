<template>
  <div class="yts-client-layout">
    <AppHeader />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

const nuxtOptions = {}

export default {
  ...nuxtOptions,

  components: {
    AppHeader, AppFooter
  }
}

</script>

<style>
@import '@/assets/styles/root.styles.scss';

.yts-client-layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>