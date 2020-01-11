import Vue from 'vue';
import Vuex from 'vuex';
import { INCREMENT, DECREMENT } from '../constants/mutation-types';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    greetings: 'hello'
  },
  mutations: {
    [INCREMENT](state) {
      return state.count++;
    },
    [DECREMENT](state) {
      return state.count--;
    }
  }
});

export default store;
