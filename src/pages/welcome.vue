<template>
  <q-page>
    <app-welcome-desktop></app-welcome-desktop>
    <app-welcome-electron></app-welcome-electron>
  </q-page>
</template>

<script>
import WelcomeDesktop from '../components/desktop/WelcomeDesktop'
import WelcomeElectron from '../components/electron/WelcomeElectron'
export default {
  components: {
    'app-welcome-desktop': WelcomeDesktop,
    'app-welcome-electron': WelcomeElectron
  }
};
</script>

<style></style>
