<template>
  <div class="block">
    <h1>VModelContainer</h1>
    <h3>First Name: {{ firstName }}</h3>
    <h3>Last Name: {{ lastName }}</h3>
    <v-model-child
      v-model:firstName="firstName"
      v-model:lastName="lastName"
    ></v-model-child>
    <br />
    <hr />
    <h3>testText: {{ testText }}</h3>
    <input type="text" v-model="testText" />
  </div>
</template>

<script>
import { ref } from 'vue';
import VModelChild from './VModelChild.vue';

export default {
  name: 'VModelContainer',
  components: { VModelChild },
  data: () => ({
    firstName: '',
    lastName: '',
  }),
  setup() {
    const testText = ref('');
    return { testText };
  },
};
</script>

<style>

</style>