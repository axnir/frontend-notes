Array.prototype.myMap = function (callback) {
  const res = [];

  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i], i, arr));
  }
  return res;
};

Array.prototype.myFilter = function (callback) {
  const res = [];
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
};

Array.prototype.myForEach = function (callback) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

Array.prototype.myReduce = function (callback, initialValue) {
  const arr = this;
  let len = arr.length >>> 0;
  let hasInitialValue = initialValue !== undefined;
  let value = hasInitialValue ? initialValue : arr[0];

  for (let i = hasInitialValue ? 0 : 1; i < len; i++) {
    value = callback(value, arr[i], i, arr);
  }
  return value;
};

const arr = [1, 2, 3, 4, 5, 6];
const res1 = arr.myMap((item, index) => item * index);
const res2 = arr.myFilter((_, index) => index > 2);
const res3 = arr.myReduce((pre, cur) => {
  return cur + pre;
}, 0);
arr.myForEach((item) => console.log(item));
console.log({ res1 });
console.log({ res2 });
console.log({ res3 });
