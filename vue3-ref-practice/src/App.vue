<template>
  <RefPractice />
  <ToRefPractice @click="onClick" :app-count="state.count" :sample="0" />
  <ToRefsPractice />
  <ToRefsPractice2 />
</template>

<script>
import RefPractice from './components/RefPractice';
import ToRefPractice from './components/ToRefPractice';
import ToRefsPractice from './components/ToRefsPractice';
import ToRefsPractice2 from './components/ToRefsPractice2';
import { reactive } from 'vue';

export default {
  name: 'App',
  components: {
    RefPractice,
    ToRefPractice,
    ToRefsPractice,
    ToRefsPractice2,
  },
  setup() {
    const state = reactive({ count: 0 });

    const onClick = () => {
      console.log('App Count');
    };

    return {
      state,
      onClick,
    };
  },
};
</script>
