<script setup lang="ts">
const user = ref();
const { getSession } = useAuth();

onBeforeMount(async () => {
  user.value = await getCurrentUser(getSession);
  console.log(user.value);
});
</script>

<template>
  <div>
    <Navbar :current-user="user" />
    <ModalsRegisterModal />
    <ModalsLoginModal />
    <NuxtPage />
  </div>
</template>
