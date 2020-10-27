<template>
  <hr />
  <h1>toRefs1</h1>
  <button @click="onClick">CLICK</button>
  <hr />
</template>

<script>
import useFeatureX from '../store/useFeatureX';
import { isRef } from 'vue';

export default {
  setup() {
    const { foo, bar } = useFeatureX();

    const onClick = () => {
      foo.value++;
      bar.value++;
      console.log('foo bar', { foo: foo.value, bar: bar.value });
      console.log('isRef(foo)', isRef(foo)); // true
      console.log('isRef(bar)', isRef(bar)); // true
    };

    return {
      onClick,
    };
  },
};
</script>
