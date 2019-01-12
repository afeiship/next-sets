(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.sets = function (inTarget, inObject) {
    nx.forIn(inObject, function (key, value) {
      nx.set(inTarget, key, value);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sets;
  }

}());
