<template>
  <div id="app"></div>
</template>

<script>
import _reduce from 'lodash/reduce';
import _cloneDeep from 'lodash/cloneDeep';
import getTestData from './data/testData';
import Director from './director/Director';
import Test1 from './components/Test1';

export default {
  name: 'App',
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
    this.compInfos = getTestData(parseData);
  },
  render(h) {
    console.log('HELLO');
    const self = this;
    new Director(h, self);
    return h('div', [Test1]);
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
