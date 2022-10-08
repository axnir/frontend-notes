
const all = (iterator) => {
  const len = iterator.length
  const res = []
  let count = 0
  return new Promise((resolve, reject) => {
    for (let item of iterator) {
      Promise.resolve(item).then(data => {
        res[i] = data
        count++
        if (count === len) {
          resolve(res)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}