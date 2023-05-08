<script setup lang="ts"></script>

<template>
  <ClientOnly>
    <div
      class="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div class="flex flex-row items-center justify-between">
        <div class="text-sm font-semibold px-6">Anywhere</div>
        <div class="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          Any week
        </div>
        <div class="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div class="hidden sm:block">Add Guests</div>
          <div class="p-2 bg-rose-500 text-white rounded-full">
            <NuxtIcon name="search" />
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style>
.nuxt-icon svg {
  width: initial;
  height: initial;
  margin-bottom: 0;
}
</style>
