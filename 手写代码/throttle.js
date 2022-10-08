// 使用定时器
function throttle1 (func, delay) {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        function.apply(this, args)
        timer = null
      }, delay)
    }
  }
}

// 使用时间戳
function throttle2 (func, delay) {
  let prev = Date.now()
  return function (...args) {
    let now = Date.now()
    if (now - prev > delay) {
      func.apply(this, args)
      prev = now
    }
  }
}

// 定时器和时间戳结合
function throttle3 (func, delay) {
  let timer = null
  let prev = 0
  return function (...args) {
    let that = this
    let now = Date.now()
    if (timer) clearTimeout(timer)
    if (now - prev > delay) {
      func.apply(that, args)
      prev = now
    } else {
      timer = setTimeout(() => {
        func.apply(that, args)
        prev = now
        timer = null
      }, delay)
    }
  }
}

window.addEventListener('resize', debounce(function () {
  console.log('节流了')
}, 1000))