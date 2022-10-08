/**
 * 选择排序
 * @param {array} arr
 */
function selectionSort(arr) {
  let len = arr.length;
  let minIndex;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
}

let arr = [32, 34, 55, 5, 432, 4, 34, 0, 654, 7, 4, 3];
console.log(selectionSort(arr));
