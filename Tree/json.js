/**
 * 遍历 json
 */
const json = {
  a: { b: { c: 1 } },
  d: [1, 2],
};

// const dfs = (root, path) => {
//   console.log(root, path)
//   Object.keys(root).forEach(i => {
//     dfs(root[i], path.concat(i))
//   })
// }

// dfs(json, [])

const dfs = (root) => {
  console.log(root);
  Object.entries(root).forEach(([key, value]) => {
    dfs(value);
  });
};

dfs(json);
