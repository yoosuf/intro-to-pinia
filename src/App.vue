  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useTodoStore } from '@/stores/todo';
  
  const todoStore = useTodoStore();
  const newTodo = ref('');
  
  const addTodo = () => {
    if (newTodo.value.trim()) {
      todoStore.addTodo(newTodo.value);
      newTodo.value = '';
    }
  };
  
  const removeTodo = (id: number) => {
    todoStore.removeTodo(id);
  };
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


