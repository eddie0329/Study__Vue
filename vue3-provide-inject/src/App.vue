<template>
  <MyDiv1 />
</template>

<script>
import { provide, ref } from 'vue';
import MyDiv1 from './components/MyDiv1';

export default {
  name: 'App',
  components: {
    MyDiv1
  },
  setup() {
    const location = ref('North Pole');
    const updateLocation = () => {
      location.value = 'South Pole';
    };
    provide('location', location);
    provide('updateLocation', updateLocation);
  }
};
</script>

<style></style>
