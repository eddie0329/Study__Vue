<script>
import Director from '../director/Director';

export default {
  name: 'Home',
  render(h) {
    const self = this;
    new Director(h, self);
    return h('div', ['h1']);
  },
};
</script>
