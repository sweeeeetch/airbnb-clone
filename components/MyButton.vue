<script setup lang="ts">
interface ButtonProps {
  label: string;
  action: (e: MouseEvent) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: string;
}

const props = defineProps<ButtonProps>();
</script>

<template>
  <ClientOnly>
    <button
      @click="action"
      :disabled="disabled"
      class="relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full"
      :class="[
        outline ? 'bg-white border-black text-black' : 'bg-rose-500 border-rose-500 text-white',
        small ? 'py-1 text-sm font-light border-[1px]' : 'py-3 text-base font-semibold border-2',
      ]"
    >
      <NuxtIcon
        v-if="icon"
        class="absolute left-4 top-3 reset"
        :name="icon"
        :filled="true"
      />
      {{ label }}
    </button>
  </ClientOnly>
</template>

<style scoped>
.nuxt-icon svg {
  width: 24px;
  height: 24px;
}
</style>
