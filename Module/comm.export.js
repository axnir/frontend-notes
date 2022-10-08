let a = 1
function delay () {
  setTimeout(() => {
    a = 3
    console.log('3秒后a的值改变了')
  }, 3000)
}

module.exports = {
  delay,
  a
}