/**
 * 洗牌算法
 *  1. 取数组中未洗牌的最后一个数；
 *  2. 从未洗牌的数中，随机选取一个；
 *  3. 交换两数位置；
 *  4. 重复执行1-3，直至所有数洗牌完成洗牌。
 * @param {Array} arr
 */
function shuffle(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let idx = Math.floor(Math.random() * (len - i)); // Math.floor 向下取整 Math.random [0,1)
    [arr[len - 1 - i], arr[idx]] = [arr[idx], arr[len - 1 - i]]; // 交换两数
  }
  return arr;
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(arr));
