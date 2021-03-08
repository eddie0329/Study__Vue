import ToastContainer from '../components/ToastContainer.vue';

export default {
  install(Vue) {
    const getContainer = c => {
      let toastHolder = c;
      while (toastHolder.$parent) {
        if (toastHolder.$options.toastHolder) break;
        toastHolder = toastHolder.$parent;
      }

      if (!toastHolder._toastContainer) {
        toastHolder._toastContainer = new (Vue.extend(ToastContainer))({
          parent: toastHolder
        });
        toastHolder._toastContainer.$mount();
        toastHolder.$el.appendChild(toastHolder._toastContainer.$el);
      }
      return toastHolder._toastContainer;
    };

    // eslint-disable-next-line func-names
    Vue.prototype.$toast = function(type, content) {
      return getContainer(this).add(type, content);
    };
  }
};
