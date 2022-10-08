function quickSort(arr, left = 0, right = arr.length - 1) {
  let len = arr.length;
  let parttionIndex;

  if (left < right) {
    parttionIndex = partition(arr, left, right);
    quickSort(arr, left, parttionIndex - 1);
    quickSort(arr, parttionIndex + 1, right);
  }
  return arr;
}
// 分区
function partition(arr, left, right) {
  let pivot = left;
  let index = pivot + 1;

  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];
  return index - 1;
}

// 测试
let arr = [2, 3, 54, 2, 1, 23, 2, 43, 5, 6, 57, 0];
console.log(quickSort(arr));
