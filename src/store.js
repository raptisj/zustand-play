import create from 'zustand'
import { devtools, persist, subscribeWithSelector } from "zustand/middleware"

const TODOS_API_URL = 'https://jsonplaceholder.typicode.com/todos'

const initialState = [
  {
    id: Math.floor(Math.random() * 100) + 1,
    title: 'Go to the gym'
  },
  {
    id: Math.floor(Math.random() * 100) + 1,
    title: 'Buy coffee'
  }
]

const todosSlice = (set, get) => ({
  todos: initialState,
  addTodo: (todo) => set(state => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) => set(state => ({ todos: state.todos.filter(todo => todo.id !== id) })),
  removeAllTodos: () => set({ todos: [] })
})

const asyncTodosSlice = (set) => ({
  asyncTodos: [],
  loading: true,
  fetchTodos: async () => {
    const response = await fetch(TODOS_API_URL)
    set({ asyncTodos: await response.json(), loading: false })
  }
})

const settingsSlice = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
})

const rootSlice = (set, get) => ({
  ...todosSlice(set, get),
  ...asyncTodosSlice(set, get),
})

export const useStore2 = create(subscribeWithSelector(() => ({ dark: false })))

export const useStore = create(devtools(rootSlice))
export const useSettings = create(devtools(persist(settingsSlice, { name: 'settings' })))