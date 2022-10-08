/**
 * 根据id获取元素
 * @param {string} id
 */
function getElementById(id) {
  let elements = document.getElementsByTagName('*');
  const len = elements.length;
  for (let i = 0; i < len; i++) {
    if (elements[i].id === id) {
      return elements[i];
    }
  }
}
