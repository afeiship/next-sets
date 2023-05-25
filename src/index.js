import nx from '@jswork/next';

nx.sets = function (inTarget, inObject) {
  var len = arguments.length;
  var target = inTarget;
  var obj = inObject;
  len === 1 && ((target = nx), (obj = inTarget));

  nx.forIn(obj, function (key, value) {
    nx.set(target, key, value);
  });
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.sets;
}

export default nx.sets;
