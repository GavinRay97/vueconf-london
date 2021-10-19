import { InjectionKey } from "vue"
////////////////////
// MUTATIONS
////////////////////
import type { ActionContext, ActionTree, MutationTree } from "vuex"
import { createStore, GetterTree, Store, useStore as baseUseStore } from "vuex"

// Uncomment during demo to show the issue here
//
// const brokenStore = createStore({
//   state () {
//     return {
//       count: 0
//     }
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })

// NOTE: Show that store type IS inferenced here
//
// const inferencedStoreTypesDemo = createStore({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })

// Show problem here, remove generic type
//
// const hookStore = baseUseStore<State>()
// hookStore.state.count

////////////////////
// STATE
////////////////////

interface Todo {
  text: string
  id: number
  isFinished: boolean
}

interface State {
  todos: Todo[]
  filter: "all" | "finished" | "unfinished"
  nextId: number
}

export enum MutationTypes {
  ADD_TODO = "ADD_TODO",
}

export type Mutations<S = State> = {
  [MutationTypes.ADD_TODO](state: S, payload: Todo): void
}

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.ADD_TODO](state, payload: Todo) {
    state.todos.push(payload)
    return state
  },
}

enum ActionTypes {
  SAMPLE_ACTION = "SAMPLE_ACTION",
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, "commit">

interface Actions {
  [ActionTypes.SAMPLE_ACTION](
    { commit }: AugmentedActionContext,
    payload: string
  ): Promise<string>
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.SAMPLE_ACTION]({ commit, dispatch }, payload) {
    console.log("Sample Action called with payload:", payload)
    return `${payload} ${payload}`
  },
}

const getters: GetterTree<State, State> = {
  finishedTodos(state) {
    return state.todos.filter((todo) => todo.isFinished)
  },
  unfinishedTodos(state) {
    return state.todos.filter((todo) => !todo.isFinished)
  },
  filteredTodos(state, getters): Todo[] {
    switch (state.filter) {
      case "finished":
        return getters.finishedTodos
      case "unfinished":
        return getters.unfinishedTodos
      case "all":
        return state.todos
    }
  },
}

////////////////////
// STORE
////////////////////
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: () => {
    return {
      todos: [],
      filter: "all",
      nextId: 0,
    } as State
  },
  mutations,
  getters,
  actions,
})

// define own `useStore` composition function for typed usage
export function useStore() {
  return baseUseStore(key)
}
