/**
 * 插入排序
 * @param {Array} arr
 * @returns {Array}
 */
function insertionSort(arr) {
  const len = arr.length;
  let preIndex;
  let curNum;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    curNum = arr[i];
    while (preIndex >= 0 && arr[preIndex] > curNum) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = curNum;
  }
  return arr;
}

let arr = [3, 5, 6, 5, 645, 43, 5, 2, 4, 324];
console.log(insertionSort(arr));
