/**
 * 20. 有效的括号
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  // 字符串中字符不是偶数，括号无法闭合，返回 false
  if (s.length % 2 !== 0) return false;
  // 使用字典
  const map = new Map();
  map.set('(', ')').set('[', ']').set('{', '}');
  // 维护栈
  let stack = [];
  let len = s.length;

  for (let i = 0; i < len; i++) {
    // 取出字符串中的字符
    const c = s[i];
    // 如果字符是左括号就入栈
    if (map.has(c)) {
      stack.push(c);
    } else {
      // 如果栈为空就说明括号无法闭合
      if (stack.length === 0) return false;
      // 取出栈顶元素
      const top = stack[stack.length - 1];
      // 是否有相应的右括号与之匹配，有则出栈，否则返回false
      if (map.get(top) === c) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
