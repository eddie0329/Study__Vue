import Vue from "vue";
import Vuex from "vuex";
import * as type from "../constants/index.js";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [
            { id: 1, title: "hello", done: false },
            { id: 2, title: "hello2", done: true }
        ],
        count: 0
    },
    mutations: {
        [type.type.INCREMENT](state) {
            state.count++;
        }
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(item => item.done);
        },
        getTodoById: state => id => {
            return state.todos.filter(item => item.id === id);
        }
    }
});

export default store;
