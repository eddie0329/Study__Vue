import axios from 'axios';

export const getDefaultState = () => ({
  todos: [],
});

const getters = {};


const SET_TODOS = 'SET_TODOS';

const mutations = {
  [SET_TODOS](state, payload) {
    state.todos = payload;
  }
};

const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    commit(SET_TODOS, res);
  }
};

export default {
  state: getDefaultState(),
  getters,
  mutations,
  actions,
  namespaced: true,
}


