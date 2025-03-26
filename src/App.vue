<script setup lang="ts">
import { ref, watch } from 'vue';
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore();
const newTodo = ref('');

// Function to add a new todo
const addTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value);
    newTodo.value = '';
  }
};

// Function to remove a todo
const removeTodo = (id: number) => {
  todoStore.removeTodo(id);
};

// Automatically save to localStorage when `todos` change
watch(
  () => todoStore.todos,
  (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
  },
  { deep: true }
);
</script>

<template>
  <div>
    <input v-model="newTodo" placeholder="Enter a task" />
    <button @click="addTodo">Add Todo</button>
    <ul>
      <li v-for="todo in todoStore.todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo.id)">❌</button>
      </li>
    </ul>
  </div>
</template>
