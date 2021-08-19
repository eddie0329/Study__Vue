<template>
<div>
  <h1>{{ state }}</h1>
  <ChildInput />
  <button @click="dispatch({ type: 'changeTemp' })">HELLO</button>
</div>
</template>

<script>
import ChildInput from './ChildInput.vue';

export default {
  inject: ['state', 'dispatch'],
  components: { ChildInput },
}
</script>
