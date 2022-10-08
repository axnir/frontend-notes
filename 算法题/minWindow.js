/**
 * 76. 最小覆盖子串
 * 设计的知识：双指针、字典
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  // 左右指针，滑动窗口
  let l = 0;
  let r = 0;
  // 使用 map 保存 t 中元素
  const need = new Map();
  // 保存 t 中元素以及出现次数
  for (let i of t) {
    need.set(i, need.has(i) ? need.get(i) + 1 : 1);
  }
  // 保存 最小子串 字符数量
  let needType = need.size;
  // 保存字符串结果
  let res = '';
  // 右指针逻辑
  while (r < s.length) {
    // 保存当前值
    const cur1 = s[r];
    // 当 cur1 是所需字符时，将 need 中此字符所需数-1
    if (need.has(cur1)) {
      need.set(cur1, need.get(cur1) - 1);
      // 当 cur1 所需数为 0 时，needType减去1
      if (need.get(cur1) === 0) {
        needType--;
      }
    }
    // 左指针逻辑
    // 当 needType 为0时，说明字符串符合条件
    while (needType === 0) {
      // 符合条件的字符串
      let newRes = s.substring(l, r + 1);
      // 开始时 res 为空，所以直接赋值
      // 保存长度小的 res
      if (!res || newRes.length < res.length) {
        res = newRes;
      }
      // 保存左指针当前值
      const cur2 = s[l];
      // 如果 左指针 指向的字符在 need 中，就将此字符+1
      if (need.has(cur2)) {
        need.set(cur2, need.get(cur2) + 1);
        // needType也要+1
        if (need.get(cur2) === 1) {
          needType++;
        }
      }
      // 左指针向右移动
      l++;
    }
    // 右指针向右移动
    r++;
  }
  return res;
};
