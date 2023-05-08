<script setup lang="ts"></script>

<template>
  <ClientOnly>
    <div class="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
      <slot />
    </div>
  </ClientOnly>
</template>

<style></style>
