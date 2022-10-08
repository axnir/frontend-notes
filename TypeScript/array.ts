// 数组声明三种方式，以数字数组为例
interface NumberArray {
  [index: number]: number;
}

const arr1: NumberArray = [1, 2, 3, 4, 5];
const arr2: number[] = [1, 2, 3, 4, 5];
const arr3: Array<number> = [1, 2, 3, 4, 5];

// 类数组
function sum(a: number, b: number) {
  const args: IArguments = arguments;
  return args;
}

// 元组
// TS允许向元组中使用数组的push方法插入新元素(但不允许访问)
type Tuple = [string, number, string];
const tuple: Tuple = ['Amy', 22, 'female'];
tuple.push(1);
console.log(tuple[2]);

// 多维数组
const twoDArr: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
const threeDArr: number[][][] = [[[1]]];

console.log(twoDArr, threeDArr);
