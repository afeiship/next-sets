/*!
 * name: @jswork/next-sets
 * description: Set a lot value value.
 * homepage: https://github.com/afeiship/next-sets
 * version: 1.0.0
 * date: 2020-11-22 15:39:55
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.sets = function (inTarget, inObject) {
    nx.forIn(inObject, function (key, value) {
      nx.set(inTarget, key, value);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sets;
  }
})();
