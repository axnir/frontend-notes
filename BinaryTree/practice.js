const tree = require('./binaryTree');

// 先序遍历
function preOrder(root) {
  if (!root) return;
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    console.log(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}

// preOrder(tree)

// 中序遍历
function inOrder(root) {
  if (!root) return;
  const stack = [];
  let node = root;

  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      console.log(node.val);
      node = node.right;
    }
  }
}

// inOrder(tree)

// 后序遍历
function postOrder(root) {
  const stack = [root];
  const output = [];

  while (stack.length) {
    const node = stack.pop();
    output.push(node);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  while (output.length) {
    const t = output.pop();
    console.log(t.val);
  }
}

postOrder(tree);
