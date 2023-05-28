<script setup lang="ts">
import { User } from "@prisma/client";
interface NavbarProps {
  currentUser: User | null;
}

const props = defineProps<NavbarProps>();
console.log(props.currentUser);
</script>

<template>
  <ClientOnly>
    <div class="fixed w-full bg-white z-10 shadow-sm">
      <div class="py-4 border-b-[1px]">
        <div class="container">
          <div class="flex flex-row items-center justify-between gap-3 md:gap-0">
            <NavbarLogo />
            <NavbarSearch />
            <NavbarUserMenu />
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped></style>
