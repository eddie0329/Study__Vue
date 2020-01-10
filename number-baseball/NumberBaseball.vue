<template>
  <div>
    <h1>{{ result }}</h1>
    <form @submit.prevent="onSubmitForm()">
      <input ref="answer" maxlength="4" minlength="4" v-model="value" />
      <button type="submit">입력</button>
    </form>
    <div>tries: {{ tries.length }}</div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tries: [],
      value: '',
      result: ''
    };
  },
  methods: {
    // TODO: lecture 3-4
    onSubmitForm() {
      this.tries.push(this.value);
      this.value = '';
      this.$refs.answer.focus();

      if (this.tries.length > 9) {
        alert('Fail');
      }
    }
  }
};
</script>

<style></style>
