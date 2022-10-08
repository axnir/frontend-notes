const tree = require('./tree');
/**
 * 深度优先遍历
 * 1. 访问根节点
 * 2. 对根节点的 children 挨个进行深度优先遍历
 * @param {object} root
 */
const dfs = (root) => {
  console.log(root.val);
  root.children.forEach((child) => dfs(child));
};
dfs(tree);
