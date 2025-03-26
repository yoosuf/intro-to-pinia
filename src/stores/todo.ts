import { defineStore } from 'pinia';

export interface Todo {
  id: number;
  text: string;
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos') || '[]') as Todo[],
  }),
  actions: {
    addTodo(text: string) {
      this.todos.push({ id: Date.now(), text });
      this.saveTodos();
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.saveTodos();
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
  },
});
