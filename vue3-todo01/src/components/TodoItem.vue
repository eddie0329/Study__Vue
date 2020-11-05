<template>
  <div>
    <MyChecker v-model="TodoIsDone" />
    <span>{{ props.title }}</span>
  </div>
</template>

<script>
import MyChecker from './MyChecker';
import { computed, inject } from 'vue';

export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    isDone: {
      type: Boolean,
      default: false
    }
  },
  components: {
    MyChecker
  },
  setup(props) {
    const changeStatus = inject('changeStatus');
    const TodoIsDone = computed({
      get: () => props.isDone,
      set: val => {
        changeStatus(props.id - 1, val);
      }
    });
    return {
      props,
      TodoIsDone
    };
  }
};
</script>

<style></style>
