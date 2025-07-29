<script setup lang="ts">
import MapboxGlobe from './components/map/MapboxGlobe.vue';
import LoginModal from './components/modal/LoginModal.vue';

</script>

<template>
  <div class="h-screen">
    <UApp>
      <MapboxGlobe />
      <LoginModal />
    </UApp>
  </div>
</template>
