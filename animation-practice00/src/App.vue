<template>
  <div id="app">
    <button @click="onClick">HELLO</button>
    <pu-stagger
      id="myStagger"
      tag="div"
      :show="show"
      :interval="0"
      :duration="0.5"
      :reverse="true"
      ease-type="linear"
    >
      <div v-for="l in list" :key="l.msg">{{ l.msg }}</div>
    </pu-stagger>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      list: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' }
      ]
    };
  },
  methods: {
    onClick() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
#myStagger > .item {
  transition: all 0.3s ease;
}
#myStagger > .item-from {
  transition: all 0.2s cubic-bezier(0, 0.3, 0.2, 0.9);
}
#myStagger > .item-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
