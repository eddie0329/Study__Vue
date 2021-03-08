<template>
  <div class="toast-container" v-if="on">
    <component
      v-for="toast in toasts"
      :key="toast.id"
      :is="toast.type"
      :content="toast.content"
      @close="() => close(toast.id)"
    ></component>
  </div>
</template>

<script>
export default {
  data: () => ({
    seq: 0,
    on: false,
    toasts: []
  }),
  components: {
    SUCCESS: () => import('./ToastSuccess'),
    FAIL: () => import('./ToastFail')
  },
  methods: {
    add(type, content) {
      this.on = true;
      this.toasts.push({ id: this.seq++, type, content });
    },
    close(id) {
      this.toasts = this.toasts.filter(toast => toast.id !== id);
    }
  }
};
</script>

<style>
.toast-container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}
</style>
