<script>
import AbstractProvider from './AbstractProvider.vue';

export default {
  name: 'InputsProvider',
  extends: AbstractProvider,
  data() {
    return {
      test: 'aaa',
      title: '',
      temp: 'helo',
      completed: false,
      count: 0,
      eddie: { firstname: 'hello', lastname: '', address: '' }
    };
  },
  computed: {
    double() {
      return this.count * 2;
    }
  },
  methods: {
    dispatch(action) {
      switch (action.type) {
        case 'changeTitle':
          this.title = action.payload;
          break;
        case 'changeTemp':
          this.temp = 'this';
          break;
        case 'changeCompleted':
          this.completed = action.payload;
          break;
        case 'test':
          this.eddie.firstname = 'choi';
          // this.eddie = { ...this.eddie, firstname: 'choi' };
          break;
        case 'changeCount':
          this.count += action.payload;
          break;
        default:
          throw new Error('No Type Matched');
      }
    }
  }
};
</script>
