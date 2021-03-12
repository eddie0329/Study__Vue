<template>
  <div id="app">
    <pre v-html="sanitized"></pre>
    <textarea v-model="textArea" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
import sanitizeHtml from 'sanitize-html';

export default {
  name: 'App',
  data: () => ({
    textArea: '',
  }),
  computed: {
    sanitized() {
      console.log(sanitizeHtml(this.textArea));
      return sanitizeHtml(this.textArea);
    },
  },
  watch: {
    textArea(newValue) {
      console.log(sanitizeHtml(newValue));
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
