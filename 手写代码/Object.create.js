/**
 * Object.create
 * @param {object} proto
 */
const create = (proto) => {
  function F() {}
  F.prototype = proto;
  F.prototype.constructor = F;
  return new F();
};

const obj = create(Object.prototype);
console.log(obj);
