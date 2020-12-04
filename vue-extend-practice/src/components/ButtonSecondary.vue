<script>
import ButtonPrimary from './ButtonPrimary';

export default {
  name: 'ButtonSecondary',
  extends: ButtonPrimary,
  computed: {
    myname() {
      return 'sam';
    },
  },
  methods: {
    onClickHello() {
      console.log('hello');
    },
    onClickHi() {
      console.log('hi');
    },
  },
};
</script>

<style>
</style>