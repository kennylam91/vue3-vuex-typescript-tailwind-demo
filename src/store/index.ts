import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

// define your typings for the store state
export interface State {
  sum: number
}

// define injection key
// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore({
  state: {
    sum: 0
  },
  mutations: {
    setSum (state: State, value: number) {
      state.sum = value
    }
  },
  actions: { },
  modules: {
  }
})

export function useStore () {
  return baseUseStore(key)
}
