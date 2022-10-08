import { delay, a } from './export.mjs'

console.log('开始执行，', 'a的值为' + a)
delay()
setTimeout(() => {
  console.log('现在a的值为' + a)
}, 5000)