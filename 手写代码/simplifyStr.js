/**
 * 请写一个函数，完成以下功能
 * 输入 '1,2,3,5,6,7,9,10,12,14'
 * 输出 '1~3,5~7,9~10,12,14'
 * @param {string} str
 */

function simplifyStr(arr) {
  const res = [];
  let temp = arr[0];
  arr.forEach((value, index) => {
    if (value + 1 !== arr[index + 1]) {
      if (value !== temp) {
        res.push(`${temp}~${value}`);
      } else {
        res.push(value);
      }
      temp = arr[index + 1];
    }
  });
  return res.join(',');
}

let arr = [1, 2, 3, 5, 6, 7, 9, 10, 12, 14];
console.log(simplifyStr(arr));
