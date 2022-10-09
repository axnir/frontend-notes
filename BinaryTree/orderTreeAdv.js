const binaryTree = require('./binaryTree');
/**
 * 非递归版二叉树遍历
 * 自己维护栈模拟递归
 * @param {object} root
 */

// 先序遍历 根->左->右
const preOrder = (root) => {
  if (!root) return;
  const stack = [root];
  // 使用一个栈stack，每次首先输出栈顶元素，
  // 也就是当前二叉树根节点，之后依次输出二叉树的左孩子和右孩子
  while (stack.length) {
    const node = stack.pop();
    console.log(node.val);
    // 先入栈的元素后输出，所以先入栈当前节点右孩子，再入栈左孩子
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
};

preOrder(binaryTree);

// 中序遍历 左->根->右
const inOrder = (root) => {
  if (!root) return;
  const stack = [];
  let node = root;
  while (node || stack.length) {
    if (node) {
      // 一直到最左边的
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      console.log(node.val);
      node = node.right;
    }
  }
};

inOrder(binaryTree);

// 后序遍历 左->右->根
const postOrder = (root) => {
  if (!root) return;
  const stack = [root];
  const outputStack = [];

  while (stack.length) {
    const node = stack.pop();
    outputStack.push(node);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  while (outputStack.length) {
    const t = outputStack.pop();
    console.log(t.val);
  }
};

postOrder(binaryTree);
