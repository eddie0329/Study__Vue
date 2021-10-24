import Vue from 'vue';
import { err } from './errhandler';
class Provider {
  #state;
  #mutations;
  #getters;

  constructor() {
    return this;
  }

  get state() {
    return this.#state;
  }

  get mutatation() {
    return this.#mutations;
  }

  get getters() {
    return this.#getters;
  }

  typeGuard(partions) {
    if (typeof partions !== 'object') err(`invalid partions: ${partions}`);
  }

  setState(state) {
    this.typeGuard(state);
    this.#state = Vue.observable(state);
    return this;
  }

  setGetters(getters) {
    this.typeGuard(getters);
    const computed = {}
    Object.entries(getters).forEach(([key, value]) => {
      Object.defineProperty(computed, key, {
        get: () => {
          return value(this.#state, this.#getters);
        },
        enumerable: true
      });
    });
    this.#getters = computed;
    return this;
  }

  setMutations(mutations) {
    this.typeGuard(mutations)
    this.#mutations = Object.entries(mutations).reduce((acc, [key, value]) => {
      acc[key] = payload => value(this.#state, payload);
      return acc;
    }, {});
    return this;
  }

  build() {
    return {
      state: this.#state,
      mutations: this.#mutations,
      getters: this.#getters
    };
  }
}

export const providerFactory = ({ state, getters, mutations }) => {
  return new Provider()
    .setState(state)
    .setMutations(mutations)
    .setGetters(getters)
    .build();
};
