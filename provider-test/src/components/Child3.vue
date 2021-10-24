<template>
  <div>
    <h1>COUNT: {{ count }}</h1>
    <h2>DOUBLE: {{ double }}</h2>
    <button @click="inc">+</button>
    <button @click="dec">-</button>
  </div>
</template>

<script>
export default {
  inject: ['state', 'mutations', 'getters'],
  computed: {
    count() {
      return this.state.count;
    },
    double() {
      return this.getters.double;
    },
  },
  methods: {
    inc() {
      this.mutations.increment();
    },
    dec() {
      this.mutations.decrement();
    }
  }
};
</script>

<style></style>
