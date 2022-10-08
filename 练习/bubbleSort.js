
function bubbleSort (arr) {
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

const arr = [1, 2, 434, 35, 4, 7, 58, 0, 68, 4, 56, 5345, 34]
console.log(bubbleSort(arr))