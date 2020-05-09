<template>
  <div id="app">
    <div v-for="(m, i, j) in map" :key="m[0]">
      i: {{ i }}
      j: {{ j }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: new Map([
        [1, 2],
        [2, 3]
      ])
    };
  }
};
</script>

