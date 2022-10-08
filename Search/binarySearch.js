/**
 * 二分搜索
 * 思路：
 *    1. 从数组的中间元素开始，如果中间元素正好是目标值，则搜索结束
 *    2. 如果目标值大于或着小于中间元素，则在大于或者小于中间元素的那一半数组中搜索
 * @param {Array} arr
 * @param {number} item
 */
function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = arr[mid];

    if (element < item) {
      low = mid + 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

const arr = [1, 2, 4, 5, 455, 46, 45, 353];
console.log(binarySearch(arr, 4));
