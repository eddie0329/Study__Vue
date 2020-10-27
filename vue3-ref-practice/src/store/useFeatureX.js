import { reactive, toRefs } from 'vue';

const useFeatureX = () => {
  const state = reactive({
    foo: 1,
    bar: 2
  });

  return toRefs(state);
};

export default useFeatureX;
