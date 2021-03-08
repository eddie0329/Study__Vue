<script>
export default {
  created() {
    this.timer = setTimeout(() => {
      this.onClick();
    }, 2000);
  },
  beforeDestroy() {
    if (this.timer) clearTimeout(this.timer);
  },
  data: () => ({
    timer: null
  }),
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick() {
      this.$emit('close');
    }
  }
};
</script>
