(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.sets = function (inTarget, inObject) {
    var len = arguments.length;
    var target = inTarget;
    var obj = inObject;
    len === 1 && ((target = nx), (obj = inTarget));

    nx.forIn(obj, function (key, value) {
      nx.set(target, key, value);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sets;
  }
})();
