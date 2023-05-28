<script setup lang="ts">
import { useMainStore } from "@@/stores/mainStore";

const router = useRouter();
const mainStore = useMainStore();
const { $toast } = useNuxtApp();

const isLoading = ref(false);
const email = ref("");
const password = ref("");
const { signIn } = useAuth();

const { handleSubmit: submit } = useForm();
const handleSubmit = submit(async () => {
  isLoading.value = true;
  signIn("credentials", {
    email: email.value,
    password: password.value,
    redirect: false,
  }).then(callback => {
    isLoading.value = false;

    if (callback?.ok) {
      $toast.success("Logged in!");
      router.push("/");
      mainStore.closeLoginModal();
    } else if (callback?.error) {
      $toast.error(callback.error);
    }
  });
});
</script>

<template>
  <ClientOnly>
    <ModalsModal
      :is-open="mainStore.isLoginModalOpen"
      :disabled="isLoading"
      title="Register"
      action-label="Continue"
      :on-close="mainStore.closeLoginModal"
      :on-submit="handleSubmit"
    >
      <template v-slot:body>
        <UiHeading subtitle="Login to your account!"> Welcome back</UiHeading>
        <UiInputsMyInput
          id="email"
          name="email"
          label="Email"
          :value="email"
          @update:value="newValue => (email = newValue)"
          validator="required|email"
        />
        <UiInputsMyInput
          id="password"
          name="password"
          label="Password"
          type="password"
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
