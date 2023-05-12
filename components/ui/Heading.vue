<script setup lang="ts">
const props = defineProps<{ center?: boolean; subtitle?: string }>();
</script>

<template>
  <div :class="[center ? 'text-center' : 'text-start']">
    <div class="text-2xl font-bold">
      <slot></slot>
    </div>
    <div
      class="font-light text-neutral-500 mt-2"
      v-if="subtitle"
    >
      {{ subtitle }}
    </div>
  </div>
</template>

<style scoped></style>
