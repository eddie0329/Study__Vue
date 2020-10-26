<template>
  <ReactivePractice />
  <ReadOnlyPractice />
</template>

<script>
import ReactivePractice from './components/ReactivePractice';
import ReadOnlyPractice from './components/ReadOnlyPractice';

export default {
  name: 'App',
  components: {
    ReactivePractice,
    ReadOnlyPractice,
  },
};
</script>

