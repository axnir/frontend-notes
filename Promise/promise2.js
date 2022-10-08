setTimeout(() => {
  console.log(1)
}, 0)
new Promise((resolve, reject) => {
  console.log(2)
  resolve()
}).then(() => {
  console.log(3)
})

new Promise((resolve, reject) => {
  console.log(4)
  resolve()
}).then(() => {
  new Promise((resolve) => {
    console.log(5)
    resolve()
  }).then(() => {
    console.log(6)
  })
})