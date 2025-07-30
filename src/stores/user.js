export const useUserStore = defineStore("user", {
  state: () => ({
    name: "",
    correctAnswers: 0,
  }),

  actions: {
    setName(name) {
      this.name = name;
    },
    incrementCorrectAnswers() {
      this.correctAnswers++;
    },
    reset() {
      this.name = "";
      this.correctAnswers = 0;
    },
    resetCounter() {
      this.correctAnswers = 0;
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ["name", "correctAnswers"],
      },
    ],
  },
});
