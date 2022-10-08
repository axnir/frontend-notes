/**
 * 防抖函数
 * @param {function} func
 * @param {number} delay
 * @param {boolean} immediate
 */
function debounce (func, delay, immediate) {
  let timer = null
  let result = null
  const debounced = function (...args) {
    if (timer) clearTimeout(timer)
    if (immediate) {
      // 如果已经执行过，不再执行
      let callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, delay)
      if (callNow) {
        result = func.apply(this, args)
      }
    } else {
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
    return result
  }

  debounced.cancel = function () {
    clearTimeout(timer)
    timer = null
  }

  return debounced
}


function debounce (func, delay, immediate = true) {
  let timer = null
  return function (...args) {
    let that = this
    if (timer) clearTimeout(timer)
    // 立即执行
    if (immediate) {
      // 如果已经执行过，不再执行
      let callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, delay)
      if (callNow) {
        func.apply(that, args)
      }
      // 非立即执行
    } else {
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }