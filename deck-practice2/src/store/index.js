import Vuex from "vuex";
import Vue from "vue";
import HearthStoneDeck from "./modules/hearth-stone-deck.js";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    HearthStoneDeck,
  },
});
