<template>
  <div>{{ readersNumber }} {{ book.title }}</div>
  <h2>{{ obj.count }}</h2>
  <button @click="onClickButton">+</button>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'App',
  setup() {
    const readersNumber = ref(0);
    const book = reactive({ title: 'Vue 3 Guide' });
    const obj = reactive({ count: 0 });
    const copy = obj.count;

    const onClickButton = () => {
      console.log(obj);
      obj.count++;
      console.log(obj.count === copy.count);
    };

    return {
      readersNumber,
      book,
      obj,
      onClickButton,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
