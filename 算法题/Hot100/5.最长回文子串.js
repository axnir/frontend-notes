/**
 * 5. 最长回文子串
 * 涉及的知识点：字符串、动态规划
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 中心扩散法
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */
const longestPalindrome = function (s) {
  if (!s) return '';

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i); // 奇数型，如 'aba
    let len2 = expandAroundCenter(s, i, i + 1); // 偶数型 'abba'
    let len = Math.max(len1, len2);

    if (len > end - start) {
      // i 就是中心位置
      // 确定回文串起始位置和终止位置，使用位操作>>
      start = i - ((len - 1) >> 1);
      end = i + (len >> 1);
    }
  }
  return s.substring(start, end + 1);
};

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  // 返回回文串长度
  return right - left - 1;
}

// 测试
const s = 'babad';
console.log(longestPalindrome(s));
