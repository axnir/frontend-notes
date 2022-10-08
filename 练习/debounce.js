const debounce = (func, delay) => {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    const that = this
    timer = setTimeout(() => {
      func.apply(that, args)
    }, delay)
  }
}