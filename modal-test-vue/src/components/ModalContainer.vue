<template>
  <div v-if="on" class="modal-container">
    <component
      v-for="modal in modals"
      :key="modal.id"
      :is="modal.component"
      :options="modal.options"
      @close="close(modal.id)"
      @resolve="(result) => resolve(modal.id, result)"
      @reject="(result) => reject(modal.id, result)"
    ></component>
  </div>
</template>

<script>
export default {
  name: 'ModalContainer',
  data: () => ({
    seq: 0,
    on: false,
    modals: [],
  }),
  methods: {
    add(component, options) {
      this.on = true;
      return new Promise((resolve, reject) => {
        this.modals.push({
          id: this.seq++,
          component,
          resolve,
          reject,
          options,
        });
      });
    },
    resolve(id, result) {
      this.modals.find((m) => m.id === id).resolve(result);
      this.close(id);
    },
    reject(id, result) {
      if (result) {
        this.modals.find((m) => m.id === id).reject(result);
      }
      this.close(id);
    },
    close(id) {
      this.modals = this.modals.filter((m) => m.id !== id);
      this.on = false;
    },
  },
};
</script>

<style>
</style>