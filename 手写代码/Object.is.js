/**
 * is
 * @param {any} a
 * @param {any} b
 */
function is(a, b) {
  if (a === b) {
    // +0和-0的情况
    return a !== 0 || b !== 0 || 1 / a === 1 / b;
  } else {
    // NaN和NaN的情况
    return a !== a && b !== b;
  }
}

console.log(is(NaN, NaN));
