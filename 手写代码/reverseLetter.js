function reverseLetter(str) {
  const arr = str.match(/[a-zA-Z]/g);
  if (arr === null) return str;
  return str.replace(/[a-zA-Z]/g, () => arr.pop());
}

console.log(reverseLetter('a-bC-dEf-ghij'));
