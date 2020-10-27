<template>
  <ReactivePractice />
  <ReadOnlyPractice />
  <ToRawPractice />
  <MarkRawPractice />
  <ShallowReactivePractice />
  <ShallowReadonlyPractice />
</template>

<script>
import ReactivePractice from './components/ReactivePractice';
import ReadOnlyPractice from './components/ReadOnlyPractice';
import ToRawPractice from './components/ToRawPractice';
import MarkRawPractice from './components/MarkRawPractice';
import ShallowReactivePractice from './components/ShallowReactivePractice';
import ShallowReadonlyPractice from './components/ShallowReadonlyPractice';

export default {
  name: 'App',
  components: {
    ReactivePractice,
    ReadOnlyPractice,
    ToRawPractice,
    MarkRawPractice,
    ShallowReactivePractice,
    ShallowReadonlyPractice
  }
};
</script>
