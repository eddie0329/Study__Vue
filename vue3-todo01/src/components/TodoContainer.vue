<template>
  <div>{{ state.todoList }}</div>
  <TodoForm />
  <div v-for="todo in state.todoList" :key="todo.id">
    <TodoItem :id="todo.id" :title="todo.title" :is-done="todo.isDone" />
  </div>
  <button @click="onClick">CLICK</button>
</template>

<script>
import { reactive, provide } from 'vue';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

export default {
  components: {
    TodoItem,
    TodoForm
  },
  setup() {
    const state = reactive({
      todoList: [
        {
          id: 1,
          title: 'hello world',
          isDone: true
        },
        {
          id: 2,
          title: 'hi',
          isDone: false
        }
      ]
    });
    const changeStatus = id => {
      state.todoList[id].isDone = false;
    };
    const onClick = () => {
      state.todoList[0].isDone = false;
    };
    provide('changeStatus', changeStatus);
    return {
      state,
      onClick
    };
  }
};
</script>

<style></style>
