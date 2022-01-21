export const story = (comp) => () => ({
  components: { comp },
  data: () => ({ mycomp: comp }),
  template: `<component :is="mycomp" />`,
});