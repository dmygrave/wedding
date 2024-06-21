<template>
  <div id="app">
    <component :is="isMobile ? 'WeddingPage' : 'DesktopWarning'"></component>
  </div>
</template>

<script>
import WeddingPage from './components/WeddingPage.vue'
import DesktopWarning from './components/DesktopWarning.vue'
import { checkDevice } from './helpers';

export default {
  name: 'App',
  components: {
    WeddingPage,
    DesktopWarning
  },
  computed: {
    isMobile() {
      return checkDevice()
    }
  }
}
</script>

