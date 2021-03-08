<template>
  <div class="toast-fail" @click="onClick">
    <p v-html="content"></p>
  </div>
</template>

<script>
export default {
  created() {
    this.timer = setTimeout(() => {
      this.onClick();
    }, 2000);
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
.toast-fail {
  cursor: pointer;
  width: 100%;
  height: 60px;
  background-color: orangered;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
