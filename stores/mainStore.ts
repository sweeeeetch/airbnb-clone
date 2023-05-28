export const useMainStore = defineStore("mainStore", {
  state: () => ({
    isRegisterModalOpen: false,
    isLoginModalOpen: false,
  }),
  actions: {
    openLoginModal() {
      this.isLoginModalOpen = true;
    },
    closeLoginModal() {
      this.isLoginModalOpen = false;
    },
    openRegisterModal() {
      this.isRegisterModalOpen = true;
    },
    closeRegisterModal() {
      this.isRegisterModalOpen = false;
    },
  },
});
