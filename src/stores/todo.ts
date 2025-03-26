import { defineStore } from 'pinia';

export interface Todo {
  id: number;
  text: string;
}

export const useTodoStore = defineStore('todo', {
  state: () => ({ todos: [] as Todo[] }),
  actions: {
    addTodo(text: string) {
      this.todos.push({ id: Date.now(), text });
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
  },
});