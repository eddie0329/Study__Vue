<template>
  <div class="toast-success" @click="onClick">
    <p v-html="content"></p>
  </div>
</template>

<script>
import ToastParent from './Toast';

export default {
  extends: ToastParent
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
