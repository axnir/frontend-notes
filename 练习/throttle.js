const throttle = (func, delay) => {
  let timer = null
  return function (...args) {
    const that = this
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(that, args)
        timer = null
      }, delay)
    }
  }
}