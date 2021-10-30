import Vue from 'vue'
import Vuex from 'vuex'
import todoStore from './modules/todos.store';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todo: todoStore
  }
})
