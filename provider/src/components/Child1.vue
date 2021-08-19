<template>
<div>
  <h1>{{ state }}</h1>
  <Child2 />
  <button @click="dispatch({ type: 'changeTemp' })">HELLO1</button>
  <button @click="dispatch({ type: 'test' })">HELLO2</button>
</div>
</template>

<script>
import Child2 from './Child2.vue';

export default {
  inject: ['state', 'dispatch'],
  components: { Child2 },
}
</script>
