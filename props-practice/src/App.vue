<template>
  <div id="app">
    <component
      v-for="comp in compInfos"
      :key="comp.id"
      :is="comp.compName"
      v-bind="comp.props"
      :class="comp.className"
      v-on="comp.events"
      v-model="comp.vModel"
    ></component>
  </div>
</template>

<script>
import _reduce from 'lodash/reduce';
import _cloneDeep from 'lodash/cloneDeep';
import getTestData from './data/testData';
import Test1 from './components/Test1';
import Test2 from './components/Test2';

export default {
  name: 'App',
  components: { Test1, Test2 },
  data: () => ({
    name: 'eddie',
    gender: 'male',
    compInfos: null,
  }),
  created() {
    const parseData = _reduce(
      _cloneDeep(this._data),
      (result, value, key) => {
        if (key !== 'compInfos') {
          result[key] = value;
        }
        return result;
      },
      {}
    );
    this.compInfos = getTestData({ ...parseData, onClick: this.onClick });
  },
  methods: {
    onClick() {
      console.log('HELLO');
    },
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
.mb {
  margin-bottom: 100px;
}
.mt {
  margin-top: 100px;
}
</style>
