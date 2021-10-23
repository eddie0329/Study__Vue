import Vue from 'vue';

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

  setState(state) {
    this.#state = Vue.observable(state);
    return this;
  }

  setGetters(getters) {
    this.#getters = Object.entries(getters).reduce((acc, [key, value]) => {
      acc[key] = () => value(this.#state);
      return acc;
    }, {});
    return this;
  }

  setMutations(mutations) {
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

// const provider = new Provider();

export const providerFactory = ({ state, getters, mutations }) => {
  return new Provider()
    .setState(state)
    .setMutations(mutations)
    .setGetters(getters)
    .build();
};

// const getState = () => {};
// const getGetters = () => {};
