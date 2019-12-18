const nx = require('@feizheng/next-js-core2');
require('../src/next-sets');

describe('nx.sets', () => {
  var myObject;
  beforeEach(function() {
    myObject = {
      testA: 'A',
      testB: 'B',
      testC: 'C',
      testD: 'D',
      path: {
        key1: {
          a: {
            b: 'b-value'
          }
        }
      }
    };
  });

  test('sets a lot of value', () => {
    nx.sets(myObject, {
      testA: 'A1',
      testB: 'B1',
      testC: 'C1',
      testD: 'D1',
      'path.key1.a.b': 'b-value1'
    });

    expect(myObject).toEqual({
      testA: 'A1',
      testB: 'B1',
      testC: 'C1',
      testD: 'D1',
      path: {
        key1: {
          a: {
            b: 'b-value1'
          }
        }
      }
    });
  });
});
