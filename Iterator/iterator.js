/**
 * 自定义迭代器
 */

const arr = [1, 2, 3, 4, 5];

function makeIterator(arr) {
  let index = 0;
  return {
    next() {
      if (index < arr.length) {
        return {
          value: arr[index++],
          done: false,
        };
      }
      return {
        value: undefined,
        done: true,
      };
    },
  };
}

// let iter = makeIterator(arr)
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

const obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]() {
    let index = 0;
    const map = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    return {
      next() {
        let mapEntries = [...map.entries()];
        if (index < mapEntries.length) {
          return {
            value: mapEntries[index++],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  },
};
let iter = obj[Symbol.iterator]();
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
for (let i of obj) {
  console.log(i);
}

let objArr = Array.from(obj);
console.log(objArr);

// Generator
function* test() {
  let val1 = yield 1;
  console.log(val1);
  let val2 = yield 2;
  console.log(val2);
  let val3 = yield 3;
  console.log(val3);
  let val4 = yield 4;
  console.log(val4);
}

let generator = test();
console.log(generator.next('one'));
console.log(generator.next('two'));
console.log(generator.next('three'));
console.log(generator.next('four'));
console.log(generator.next());

console.log('obj: ' + [...obj]);
