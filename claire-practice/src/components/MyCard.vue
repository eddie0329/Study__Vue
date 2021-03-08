<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ actress }}</h2>
    <h2>{{ script }}</h2>
    <Popup />
    <!-- <button @click="onClick">MORE</button>
    <ul v-if="isPopupOpen">
      <li @click="onDelete">DELETE</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'MyCard',
  data: () => ({
    isPopupOpen: false
  }),
  props: {
    title: {
      type: String,
      default: ''
    },
    actress: {
      type: String,
      default: ''
    },
    script: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick() {
      this.$emit('deleteCard');
    }
  }
};
</script>

<style></style>
