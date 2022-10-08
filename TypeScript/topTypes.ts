// topType 顶端类型--any、unknown

// 使用 unknown 必须缩小 val 的范围
const fn1 = (val: unknown): string => {
  if (typeof val === 'string') {
    return parseInt(val).toFixed(2);
  } else if (typeof val === 'number') {
    return val.toFixed(2);
  } else {
    return '只能输入 string 或者 number';
  }
};

console.log(fn1({}));

// 使用 any 会关闭类型检查
const fn2 = (val: any): string => {
  return parseInt(val).toFixed(2);
};

console.log(fn2('2'));
