<script setup lang="ts">
import { ref, watch } from "vue";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLable?: string;
}

const props = defineProps<ModalProps>();

const showModal = ref(props.isOpen);

watch(
  () => props.isOpen,
  newValue => {
    showModal.value = newValue;
  }
);

const handleClose = () => {
  if (props.disabled) return;
  showModal.value = false;
  setTimeout(() => {
    props.onClose();
  }, 300);
};

const handleSubmit = () => {
  if (props.disabled) return;
  props.onSubmit();
};

const handleSecondaryAction = () => {
  if (props.disabled || !props.secondaryAction) return;

  props.secondaryAction();
};
</script>

<template>
  <ClientOnly>
    <div
      v-if="isOpen"
      class="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70"
    >
      <div
        class="relative w-full md:w-4/6 lg:w-3/5 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto"
      >
        <div
          class="translate duration-300 h-full"
          :class="[showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0']"
        >
          <div
            class="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
          >
            <div class="flex items-center p-6 rounded-t justify-center border-b-[1px]">
              <!-- Header  -->
              <button
                class="p-1 border-0 hover:opacity-70 transition absolute left-9"
                @click="handleClose"
              >
                <NuxtIcon name="close" />
              </button>
              <div class="text-lg font-semibold">{{ title }}</div>
            </div>
            <div class="relative p-6 flex-auto">
              <!-- Body  -->
              <slot name="body"></slot>
            </div>
            <div class="flex flex-col gap-2 p-6">
              <!-- Footer  -->
              <div class="flex flex-row items-center gap-4 w-full">
                <MyButton
                  v-if="secondaryActionLable"
                  outline
                  :disabled="disabled"
                  :label="secondaryActionLable"
                  :action="handleSecondaryAction"
                />
                <MyButton
                  :disabled="disabled"
                  :label="actionLabel"
                  :action="handleSubmit"
                />
              </div>
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.nuxt-icon svg {
  width: 18px;
  height: 18px;
}
</style>
