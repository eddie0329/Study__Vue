<template>
  <div>
    <h1>{{ myname }}</h1>
    <button @click="onClickHello">HELLO</button>
    <button @click="onClickHi">HI</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonPrimary',
  computed: {
    myname() {
      return 'eddie';
    },
  },
  methods: {
    onClickHello() {
      console.log('HELLO');
    },
    onClickHi() {
      console.log('HI');
    },
  },
};
</script>

<style>
</style>