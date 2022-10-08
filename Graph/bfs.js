const graph = require('./graph');

/**
 * 图的广度优先遍历
 * 1. 新建一个队列，把根节点入队
 * 2. 将队头出队并访问
 * 3. 将队头的没访问过的相邻节点入队
 * 4. 重复第2、3步，直到队列为空
 */

const bfs = (p) => {
  const queue = [p];
  const visited = [p];
  while (queue.length) {
    const node = queue.shift();
    console.log(node);
    graph[node].forEach((c) => {
      if (!visited.includes(c)) {
        queue.push(c);
        visited.push(c);
      }
    });
  }
};
bfs(2);
