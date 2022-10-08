const obj = {
  name: 'Amy',
  age: 21,
  career: 'teacher',
  info: {
    filed: ['JS', 'CSS', 'HTML'],
    framework: ['React', 'Vue', 'Angular'],
    student: [
      {
        name: 'daming',
        age: 18,
      },
      {
        name: 'lingling',
        age: 18,
      },
    ],
  },
  habby: ['travel', 'animation'],
};

function deepClone(origin, hash = new WeakMap()) {
  if (origin instanceof RegExp) return new RegExp(origin);
  if (origin instanceof Date) return new Date(origin);
  if (typeof origin !== 'obj' || typeof origin === null) return origin;

  if (hash.has(origin)) return has.get(origin);

  let tar = new origin.constructor();
  Map.set(origin, tar);
  for (let key in origin) {
    if (origin.hasOwnProperty(key)) {
      tar[key] = deepClone(origin[key]);
    }
  }
  return tar;
}

console.log(deepClone(obj));
