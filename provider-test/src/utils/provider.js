import Vue from 'vue';

class Provider {
  #vm;
  #state;
  #mutations;
  #getters;

  constructor() {
    this.#vm = new Vue();
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

// const getState = (args) => ({

// });

// const getGetters = () => {};
