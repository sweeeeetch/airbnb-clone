<script setup lang="ts">
const props = defineProps<{
  action: () => void;
}>();
</script>

<template>
  <ClientOnly>
    <div
      @click="action"
      class="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
    >
      <slot />
    </div>
  </ClientOnly>
</template>

<style></style>
