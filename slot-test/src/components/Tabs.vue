<script>
export default {
  methods: {
    onClick() {
      console.log('HELLO');
    },
    parseItems() {
      // switch case 'vnode' item.push
    }
  },
  data: () => ({
    item: [],
  }),

  render(h) {
    return h('div', {
      class: { tab: true },
      on: {
        click: this.onClick
      },
    }, this.$slots.default);
  },
};
</script>

<style>

</style>