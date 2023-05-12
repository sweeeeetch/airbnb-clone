<script setup lang="ts">
import axios, { AxiosError } from "axios";
import { useMainStore } from "@@/stores/mainStore";
const mainStore = useMainStore();
const { $toast } = useNuxtApp();

const isLoading = ref(false);
const name = ref("");
const email = ref("");
const password = ref("");

const { handleSubmit: submit } = useForm();
const handleSubmit = submit(async () => {
  // if (!meta.value.valid) {
  //   const { valid, errors } = await validate();
  //   console.log(valid, errors);
  //   return;
  // }
  isLoading.value = true;
  axios
    .post("/api/register", { name, email, password })
    .then(() => {})
    .catch((e: AxiosError) => $toast.error(e.message))
    .finally(() => {
      setTimeout(function () {
        isLoading.value = false;
      }, 1000);
    });
});
</script>

<template>
  <ClientOnly>
    <ModalsModal
      :is-open="mainStore.isRegisterModalOpen"
      :disabled="isLoading"
      title="Register"
      action-label="Continue"
      :on-close="mainStore.closeRegisterModal"
      :on-submit="handleSubmit"
    >
      <template v-slot:body>
        <UiHeading subtitle="Create an account"> Welcome to Airbnb </UiHeading>
        <UiInputsMyInput
          id="email"
          name="email"
          label="Email"
          :value="email"
          @update:value="newValue => (email = newValue)"
          validator="required|email"
        />
        <UiInputsMyInput
          id="name"
          name="name"
          label="Name"
          :value="name"
          @update:value="newValue => (name = newValue)"
          validator="required"
        />
        <UiInputsMyInput
          id="password"
          name="password"
          label="Password"
          :value="password"
          @update:value="newValue => (password = newValue)"
          validator="required|min:6"
        />
      </template>
      <template v-slot:footer>
        <div class="flex flex-col gap-4 mt-3">
          <hr />
          <MyButton
            outline
            label="Continue with Google"
            icon="google"
            :action="() => {}"
          />
          <MyButton
            outline
            label="Continue with GitHub"
            icon="github"
            :action="() => {}"
          />
          <div class="text-neutral-500 text-center mt-4 font-light">
            <div class="flex flex-row justify-center items-center gap-2">
              <p>Already have an account?</p>
              <p class="text-neutral-800 cursor-pointer hover:underline">Log in</p>
            </div>
          </div>
        </div>
      </template>
    </ModalsModal>
  </ClientOnly>
</template>

<style scoped></style>
