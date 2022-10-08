let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(2)
    reject(new Error('错误'))
  }, 2000)
})

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 2000)
})

// Promise.all 全部 resolve 才能完成
let all = Promise.all([p1, p2, p3])
all.then((res) => {
  console.log('all: ' + res)
}, (err) => {
  console.log('all-err: ' + err)
})

// Promise.race 只要有一个 resolve 就可
let race = Promise.race([p1, p2, p3])
race.then((res) => {
  console.log('race: ' + res)
})