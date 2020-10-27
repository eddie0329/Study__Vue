<template>
  <hr />
  <h1>toRefs2</h1>
  <button @click="onClick">CLICK</button>
  <hr />
</template>

<script>
import useFeatureX from '../store/useFeatureX';

export default {
  setup() {
    const { foo, bar } = useFeatureX();

    const onClick = () => {
      foo.value++;
      bar.value++;
      console.log('foo bar', { foo, bar });
    };

    return {
      onClick,
    };
  },
};
</script>