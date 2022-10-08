// Promise 是鸭子类型
const obj = {
  then (resolve, reject) {
    resolve('success!!!')
  }
}

let p1 = Promise.resolve(obj)
p1.then(res => {
  console.log(res)
})