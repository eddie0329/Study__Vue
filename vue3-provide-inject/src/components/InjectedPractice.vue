<template>
  <div>{{ userLocation }}</div>
  <button @click="userUpdateLocation">CLICK</button>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const userLocation = inject('location', 'The universe');
    const userUpdateLocation = inject('updateLocation');
    return {
      userLocation,
      userUpdateLocation
    };
  }
};
</script>
