import RealMyComp from './MyButton.vue';
import { story } from '../utils';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: RealMyComp,
};

export const MyButton =  story(RealMyComp);
