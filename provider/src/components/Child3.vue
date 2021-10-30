<template>
  <ChildInputContainer />
</template>

<script>
import ChildInputContainer from './ChildInputContainer.vue';

export default {
  name: 'Child3',
  inject: ['state', 'dispatch'],
  components: {ChildInputContainer},
}
</script>

<style>

</style>