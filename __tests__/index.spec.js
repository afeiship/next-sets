(function () {
  require('../src');

  describe('api.basic test', () => {
    var myObject;
    beforeEach(function () {
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

    test('sets for nx when args.length == 1', () => {
      nx.sets({
        a: 1,
        b: 2,
        c: 3
      });

      expect(nx.a).toBe(1);
      expect(nx.b).toBe(2);
      expect(nx.c).toBe(3);
    });
  });
})();
