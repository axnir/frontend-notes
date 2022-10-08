/**
 * new
 * @param {function} func
 * @param  {...any} args
 */

function myNew(func, ...args) {
  if (typeof func !== 'function') {
    throw '第一个参数必须是方法体';
  }

  const obj = {};
  const proto = Object.create(func.prototype);
  Object.setPrototypeOf(obj, proto);

  const res = func.apply(obj, args);

  if (res && (typeof res === 'function' || typeof res === 'object')) {
    return res;
  }
  return obj;
}

function test(name) {
  this.name = name;
}

console.log(myNew(test, 'mimi'));
