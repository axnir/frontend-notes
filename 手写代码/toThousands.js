/**
 * 数字千位符格式化
 * @param {number} num
 */
function toThousands(num) {
  let res = '';
  let count = 0;
  num = (num || 0).toString();
  for (let i = num.length - 1; i >= 0; i--) {
    count++;
    res = num[i] + res;
    if (count % 3 === 0 && i !== 0) {
      res = ',' + res;
    }
  }
  return res;
}

let num = '34467';
console.log(toThousands(num));
