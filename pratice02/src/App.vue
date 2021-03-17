<template>
  <div id="app">
    <h1>예지님</h1>
    <h1>{{ editList.baseList[0].kv }}</h1>
    <h1>Bigpicture</h1>
    <h1>{{ editList.baseList[1].kv }}</h1>
    <h1>Welcome</h1>
    <h1>{{ editList.baseList[2].kv }}</h1>
    <Parent v-model="editList" />
  </div>
</template>

<script>
import BaseList from '@/data/BaseList';
import Parent from '@/components/Parent';

export default {
  name: 'App',
  data: () => ({
    editList: null,
  }),
  mounted() {
    this.editList = BaseList;
  },
  components: { Parent },
  methods: {},
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
