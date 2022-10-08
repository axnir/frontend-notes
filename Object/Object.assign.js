const target = Object.defineProperty({}, 'a', {
  value: 1,
  writable: true,
});
console.log(target);
const res = Object.assign(target, { b: 2 }, { b: 3, a: 100 }, { c: 4 });
console.log(res);
