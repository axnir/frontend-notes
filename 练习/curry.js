const curry = (fn, ...args) => {
  return args.length < fn.length
    ? (...arguments) => curry(fn, ...args, ...arguments)
    : fn(...args);
};

function add(x, y, z) {
  return x + y + z;
}

let test = curry(add);
console.log(test(1, 2, 3));
console.log(test(1, 2)(3));
