<template>
  <Transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 bg-slate-950 bg-opacity-80 flex flex-col items-center justify-center z-[9999]"
    >
      <img src="/logo_white.png" class="w-56 animate-pulse" alt="Logo" />
      <!-- <div class="loader animate-pulse mt-5"></div> -->
    </div>
  </Transition>
</template>

<script setup>
  const props = defineProps({ show: Boolean })
</script>
