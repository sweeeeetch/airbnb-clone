<script setup lang="ts">
import { error } from "console";

interface InputProps {
  id: string;
  name: string;
  label: string;
  value: string;
  type?: string;
  disabled?: boolean;
  formatPiece?: boolean;
  required?: boolean;
  validator?: string;
}
const props = defineProps<InputProps>();
</script>

<template>
  <div class="w-full relative mt-4">
    <Field
      v-slot="{ field, errors }"
      :name="name"
      :rules="validator"
    >
      <input
        v-bind="field"
        :type="type ? type : 'text'"
        :name="name"
        :id="id"
        :disabled="disabled"
        :value="value"
        @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
        placeholder=" "
        class="peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed"
        :class="[
          formatPiece ? 'pl-6' : 'pl-4',
          errors.length
            ? 'border-rose-500 focus:border-rose-500'
            : 'border-neutral-300 focus:border-black',
        ]"
      />
      <label
        :for="id"
        class="absolute text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        :class="[
          formatPiece ? 'left-9' : 'left-4',
          errors.length ? 'text-rose-500' : 'text-zinc-400',
        ]"
      >
        {{ label }}
      </label>
      <div class="text-rose-400 mt-[3px]">{{ errors[0] }}</div>
    </Field>
  </div>
</template>

<style scoped></style>
