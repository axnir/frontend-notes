function test(string) {
  return string.replace(/^\[object |\]$/g, '');
}
console.log(test('[object Number]'));
