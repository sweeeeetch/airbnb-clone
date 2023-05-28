<script setup lang="ts">
import { useMainStore } from "@@/stores/mainStore";
const mainStore = useMainStore();

const isOpen = ref(false);

const log = () => {
  console.log(1);
};
</script>

<template>
  <ClientOnly>
    <div class="relative">
      <div class="flex flex-row items-center gap-3">
        <div
          class="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          @click=""
        >
          Airbnb your home
        </div>
        <div
          class="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          @click="isOpen = !isOpen"
        >
          <NuxtIcon name="menu" />
          <div class="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      <div
        class="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm"
        v-if="isOpen"
      >
        <div class="flex flex-col cursor-pointer">
          <NavbarMenuItem :action="mainStore.openLoginModal">Login</NavbarMenuItem>
          <NavbarMenuItem :action="mainStore.openRegisterModal">Sign up</NavbarMenuItem>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped></style>
