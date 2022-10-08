
const race = (iterator) => {
  return new Promise((resolve, reject) => {
    iterator.forEach(item => {
      Promise.resolve(item).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  })
}