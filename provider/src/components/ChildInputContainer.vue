<template>
  <div>
    <TextInput v-model="title" validation="required" title="Title" />
    <Checkbox v-model="completed" />
  </div>
</template>

<script>
import TextInput from './general/TextInput.vue';
import Checkbox from './general/Checkbox.vue';

export default {
  inject: ['state', 'dispatch'],
  components: {TextInput, Checkbox},
  computed: {
    title: {
      get() {
        return this.state?.title ?? '';
      }, 
      set(payload) {
        this.dispatch({ type: 'changeTitle', payload });
      }
    },
    completed: {
      get() {
        return this.state?.completed ?? false;
      },
      set(payload) {
        this.dispatch({ type: 'changeCompleted', payload });
      }
    },
  },
}
</script>

<style>

</style>