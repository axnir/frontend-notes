function test (url) {
  let index = url.indexOf('?')
  let str = url.substring(index + 1, url.length)
  let arr = str.split('&')
  const map = new Map()
  arr.forEach(item => {
    let res = item.split('=')
    map.set(res[0], res[1])
  })
  return map
}

let str = 'https://www.baidu.com/?a=123&b=456&c=qwert'
console.log(test(str))