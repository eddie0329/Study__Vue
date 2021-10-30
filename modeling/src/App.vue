<template>
  <div id="app">
    <div>
      <button @click="tabSelected = 'character'">character select</button>
      <button @click="tabSelected = 'background'">background</button>
      <button @click="tabSelected = 'image'">image</button>
    </div>
    <component v-for="(comp, idx) in componentList" :key="idx" :is="comp" v-model="videoData" />
  </div>
</template>

<script>
// character -> posiotion(selection)
// background -> bgc(selection), bg(input)
// image -> exposition(toggle tab)

export default {
  name: 'App',
  data: () => ({
    /** @type {'character' | 'background' | 'image'} */
    tabSelected: 'character',
    videoData: {
      /** @type {'LEFT' | 'CENTER' | 'RIGHT' | ''} */
      position: 'LEFT', 
      /** @type {string} */
      bgc: '#000',
      /** @type {string} */
      bg: '',
      /** @type {boolean} */ 
      exposition: false,
    },
  }),
  computed: {
    componentList() {
      const data = {
        character: ['PositionSelect'],
        background: ['BgcSelect', 'BgInput'],
        image: ['ExpoisionTab'],
      }
      return data[this.tabSelected];
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
