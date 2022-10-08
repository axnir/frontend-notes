let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 0)
  setTimeout(() => {
    console.log(2)
  }, 0)
  console.log(3)
}).then((res) => {
  console.log(res)
})


// 状态依赖
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('err')
  }, 3000)
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(p1)
  }, 1000)
  // resolve(p1)
}).
  then((res) => {
    console.log(res)
  }).
  catch((err) => {
    console.error(err)
  })
