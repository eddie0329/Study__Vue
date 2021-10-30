<template>
  <div>
    <TextInput v-model="title" validation="required" title="Title" />
    <Checkbox v-model="completed" />
    <h3>COUNT: {{ state.count }}</h3>
    <h3>double: {{ getters.double }}</h3>
  </div>
</template>

<script>
import TextInput from './general/TextInput.vue';
import Checkbox from './general/Checkbox.vue';

export default {
  inject: ['state', 'dispatch', 'getters'],
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