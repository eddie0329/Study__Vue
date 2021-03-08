<template>
  <div class="toast-success" @click="onClick">
    <p v-html="content"></p>
  </div>
</template>

<script>
export default {
  created() {
    this.timer = setTimeout(() => {
      this.onClick();
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) clearTimeout(this.timer);
  },
  data: () => ({
    timer: null
  }),
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick() {
      this.$emit('close');
    }
  }
};
</script>

<style>
.toast-success {
  cursor: pointer;
  height: 60px;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
