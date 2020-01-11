<template>
  <div>
    <div>hello world</div>
    <Test1 test-props="this is test-props"></Test1>
    <Test2 v-bind:testProps="2"></Test2>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
    <p>{{ count }}</p>
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
    <p>{{ greetings }}</p>
    <div>{{ number }}</div>
    <button @click="onClickNumber()">click</button>
  </div>
</template>

<script>
import Test1 from './Test1.vue';
import Test2 from './Test2.vue';
import router from './router/router.js';
import store from './store/store.js';
import { mapState, mapMutations } from 'vuex';
import { INCREMENT, DECREMENT } from './constants/mutation-types.js';

export default {
  router,
  store,
  data() {
    return {
      number: 0
    };
  },
  methods: {
    ...mapMutations({
      increment: INCREMENT,
      decrement: DECREMENT
    }),
    onClickNumber() {
      return this.number++;
    }
  },
  components: {
    Test1,
    Test2
  },
  computed: mapState({
    count: state => state.count,
    greetings: 'greetings'
  })
};
</script>

<style></style>
