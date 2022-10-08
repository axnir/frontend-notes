/**
 * 归并排序
 * @param {Array} arr
 * @returns {Array}
 */
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = Math.floor(arr.length / 2);
  let left = arr.slice(0, pivot);
  let right = arr.slice(pivot);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const res = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  while (left.length) {
    res.push(left.shift());
  }
  while (right.length) {
    res.push(right.shift());
  }

  return res;
}

let arr = [43, 54, 6, 7, 56, 52, 2, 4243, 535343, 24, 4, 24];
console.log(mergeSort(arr));
