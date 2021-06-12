<template>
  <!-- eslint-disable vue/valid-v-on -->
  <div class="home">
    <h1 v-if="isLogin">YES!</h1>
    <h1 v-else>NO</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="onClickTemp('HelloWorld')">HELLOWOLRD</button>
    <button @click="onClickTemp('A')">A</button>
    <button @click="onClickTemp('B')">B</button>
    <keep-alive>
      <component :is="temp"></component>
    </keep-alive>
    <!-- <HelloWorld :is-login="isLogin" msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import A from '@/components/A';
import B from '@/components/B';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  },
  activated() {
    console.log('ACTIVATED');
  },
  deactivated() {
    console.log('DEACTIVATED');
  },
  data: () => ({
    temp: 'HelloWorld'
  }),
  methods: {
    onClickTemp(comp) {
      this.temp = comp;
    }
  },
  components: {
    HelloWorld,
    A,
    B
  }
};
</script>
