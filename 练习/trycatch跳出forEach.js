const arr = [1, 2, 3, 4, 5]

try {
  arr.forEach(item => {
    console.log(item)
    if (item >= 5) {
      throw new Error('break')
    }
  })
} catch (e) {
  console.log(e)
}