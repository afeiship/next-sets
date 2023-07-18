import nx from '@jswork/next';

const defaults = { prefix: '' };

nx.sets = function (inTarget, inObject, inOptions) {
  const opts = nx.mix(null, defaults, inOptions);
  const len = arguments.length;
  const isOnly = len === 1;
  const obj = isOnly ? inTarget : inObject;
  const target= isOnly ? nx : inTarget;

  nx.forIn(obj, function (key, value) {
    const theKey = [opts.prefix, key].filter(Boolean).join('.');
    nx.set(target, theKey, value);
  });
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.sets;
}

export default nx.sets;
