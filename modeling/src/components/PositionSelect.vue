<template>
  <div>
    <button @click="changePosition('LEFT')">LEFT</button>
    <button>CENTER</button>
    <button>RIGHT</button>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Object, default: () => ({}) },
  },
  methods: {
   /**
    *  @param {'LEFT' | 'CENTER' | 'RIGHT'} position
    */ 
    changePosition(position) {
      this.value.position = position;
    },
  },
}
</script>

<style>

</style>