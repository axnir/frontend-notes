/**
 * instanceof
 * @param {Object} left
 * @param {Object} right
 */
function myInstanceof(left, right) {
  if (typeof left !== 'object' || left === null || right === null) return false;
  let proto = Object.getPrototypeOf(left);

  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
}

console.log(myInstanceof(new Date(), Object));
console.log(myInstanceof(1, Number));
