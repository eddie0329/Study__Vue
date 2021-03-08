<template>
  <div class="toast-fail" @click="onClick">
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
