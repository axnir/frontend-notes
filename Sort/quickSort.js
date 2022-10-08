/**
 * 快速排序
 * @param {Array} arr
 */
function quickSort(arr) {
  // 检查数组的元素个数，如果小于等于1，就返回
  if (arr.length < 2) return arr;

  // 选择"基准"（pivot），并将其与原数组分离
  // 再定义两个空数组，用来存放一左一右的两个子集
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];

  // 开始遍历数组
  // 小于"基准"的元素放入左边的子集，大于基准的元素放入右边的子集
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // 使用递归不断重复这个过程，就可以得到排序后的数组
  return quickSort(left).concat([pivot], quickSort(right));
}

let arr = [3, 5, 6, 5, 645, 43, 5, 2, 4, 324];
console.log(quickSort(arr));
