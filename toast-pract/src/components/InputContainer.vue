<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <button @click="onClickSuccess">SUCCESS</button>
    <button @click="onClickFail">FAIL</button>
    <button @click="onClickError">ERROR</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClickSuccess() {
      this.$toast('SUCCESS', '<em>Hello</em><br />World!');
    },
    onClickFail() {
      this.$toast('FAIL', 'HELLO');
    },
    onClickError() {
      this.$toast('eddie', 'eddie');
    }
  }
};
</script>

<style></style>
