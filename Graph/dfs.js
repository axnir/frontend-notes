const graph = require('./graph');

/**
 * 图的深度优先遍历(DFS)
 * 1. 访问根节点
 * 2. 对根节点未访问过的相邻节点挨个进行 DFS
 */
let visited = []; // 保存访问过的节点
const dfs = (p) => {
  console.log(p);
  visited.push(p);
  graph[p].forEach((c) => {
    if (!visited.includes(c)) {
      dfs(c);
    }
  });
};
dfs(2);
