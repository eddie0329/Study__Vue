export function debounceWithId(func, wait, id, immediate = false) {
  var timeouts = {};
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeouts[id] = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeouts[id];
    clearTimeout(timeouts[id]);
    timeouts[id] = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
