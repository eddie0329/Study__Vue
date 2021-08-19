<template>
<div>
  <h1>TEMP: {{ temp }}</h1>
  <input type="checkbox" v-model="temp" @change="$emit('input', temp)" />
</div>
</template>

<script>
export default {
  props: {
    value: { type: Boolean, default: false},
  },
  data: () => ({
    temp: false,
  }),
  created() {
    this.temp = this.value;
  }
}
</script>
