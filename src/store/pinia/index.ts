import { acceptHMRUpdate, defineStore } from "pinia"

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

export const useTodosStore = defineStore("todos", {
  state: () => {
    return {
      todos: [],
      filter: "all",
      nextId: 0,
    } as State
  },
  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    filteredTodos(state): Todo[] {
      switch (state.filter) {
        case "finished":
          return this.finishedTodos
        case "unfinished":
          return this.unfinishedTodos
        case "all":
          return this.todos
      }
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text: string) {
      // you can directly mutate the state
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})

// HMR functionality
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodosStore, import.meta.hot))
}
