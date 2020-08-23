<template>
  <div>
    <AppHeader />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

import Vue from 'vue';

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
</style>