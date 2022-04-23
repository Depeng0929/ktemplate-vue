import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: 0,
  }),
  getters: {
    doubleCount: state => state.token * 2,
  },
  actions: {
    increment() {
      this.token++
    },
  },
})
