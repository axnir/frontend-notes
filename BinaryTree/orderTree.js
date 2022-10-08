const binaryTree = require('./binaryTree');
/**
 * 递归版二叉树遍历
 * @param {object} root
 */
// 先序遍历 根->左->右
const preOrderBinaryTree = (root) => {
  if (!root) return;
  console.log(root.val);
  preOrderBinaryTree(root.left);
  preOrderBinaryTree(root.right);
};

preOrderBinaryTree(binaryTree);

// 中序遍历 左->根->右
const inOrderBinaryTree = (root) => {
  if (!root) return;
  inOrderBinaryTree(root.left);
  console.log(root.val);
  inOrderBinaryTree(root.right);
};

inOrderBinaryTree(binaryTree);

// 后序遍历 左->右->根
const postOrderBinaryTree = (root) => {
  if (!root) return;
  postOrderBinaryTree(root.left);
  postOrderBinaryTree(root.right);
  console.log(root.val);
};

postOrderBinaryTree(binaryTree);
