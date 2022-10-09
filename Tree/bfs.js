const tree = require('./tree');
/**
 * 广度优先遍历
 * 1. 新建一个队列，把根节点入队
 * 2. 把队头出队并访问
 * 3. 把对头的 children 挨个入队
 * 4. 重复2、3步，直到队列为空
 * @param {object} root
 */
const bfs = (root) => {
  const queue = [root];

  while (queue.length) {
    const t = queue.shift();
    console.log(t.val);
    t.children.forEach((child) => queue.push(child));
  }
};
console.log(tree);
bfs(tree);
