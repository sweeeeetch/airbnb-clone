export const useMainStore = defineStore("mainStore", {
  state: () => ({
    isRegisterModalOpen: true,
  }),
  actions: {
    openRegisterModal() {
      this.isRegisterModalOpen = true;
    },
    closeRegisterModal() {
      this.isRegisterModalOpen = false;
    },
  },
});
