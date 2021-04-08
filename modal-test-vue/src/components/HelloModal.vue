<template>
  <div class="hello-modal">
    <div class="hello-modal__wrapper">
      <button @click="$emit('close')" class="hello-modal__cancel-btn">X</button>
      <h1>HELLO</h1>
      <h3>{{ options.gender }}</h3>
      <button @click="$emit('resolve', 'eddie')">RESOLVE</button>
      <button @click="$emit('reject')">REJECT</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    result: 'eddie',
  }),
};
</script>

<style>
.hello-modal {
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: #000000;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.hello-modal__wrapper {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: white;
  box-sizing: border-box;
  padding: 10px;
}
.hello-modal__cancel-btn {
  display: block;
  margin-left: auto;
}
</style>