/**数字、字符串反转，使用了函数重载 */
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}

function func(value: unknown) {
  // @ts-ignore: Object is of type 'unknown'.
  value.test('abc');

  assertionFunction(value);

  // %inferred-type: RegExp
  value;

  value.test('abc'); // OK
}

function assertionFunction(arg: unknown): asserts arg is RegExp {
  if (!(arg instanceof RegExp)) {
    throw new TypeError('Not a RegExp: ' + arg);
  }
}
