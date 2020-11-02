import { onMounted } from 'vue';

const mounted = () =>
  onMounted(() => {
    console.log('HELLO_MOUNTED');
  });

export default mounted;
