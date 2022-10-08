
Array.prototype.myMap = function (callbackFn, thisArgs) {
  if (this === null || this === undefined) {
    throw new TypeError(`Cannot read property 'map' of ${this}`)
  }
  // 处理回调类型异常
  if (Object.prototype.toString.call(callbackFn) !== '[object Function]') {
    throw new TypeError(`${callbackFn} is not a function`)
  }

  let O = Object(this) // 规定 this 要先转化为对象
  let T = thisArgs
  let len = O.length >>> 0 // 保证 len 为数字且为整数
  let A = new Array(len)

  for (let i = 0; i < len; i++) {
    if (i in O) { // 原型链查找属性
      let value = callbackFn.call(T, O[i], i, O)
      A[i] = value
    }
  }
  return A
}

const arr = [1, 2, 4, 54, 5, 4, 6, 6]
let newArr = arr.myMap((item, index) => {
  return item + index
})
console.log(newArr)