/**
 * 冒泡排序
 * 时间复杂度：O(n^2)
 * @param {Array} arr
 */
function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let flag = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
  return arr;
}

const arr = [1, 2, 4, 35, 4, 75, 8, 6, 9, 0, 93, 34, 433, 0, 2];
console.log(bubbleSort(arr));
