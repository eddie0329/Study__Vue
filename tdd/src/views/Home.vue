<template>
  <div class="home">
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  components: {
  },
  async created() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(res);
  }
}
</script>
