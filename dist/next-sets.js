/*!
 * name: @feizheng/next-sets
 * description: Set a lot value value.
 * url: https://github.com/afeiship/next-sets
 * version: 1.0.0
 * date: 2019-12-18 19:11:47
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.sets = function(inTarget, inObject) {
    nx.forIn(inObject, function(key, value) {
      nx.set(inTarget, key, value);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sets;
  }
})();

//# sourceMappingURL=next-sets.js.map
