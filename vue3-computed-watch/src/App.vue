<template>
  <ComputedPractice />
  <WatchEffect />
  <WatchPractice />
</template>

<script>
import ComputedPractice from './components/ComputedPractice';
import WatchEffect from './components/WatchEffect';
import WatchPractice from './components/WatchPractice';

export default {
  name: 'App',
  components: {
    ComputedPractice,
    WatchEffect,
    WatchPractice
  }
};
</script>
