/**
 * AVL树（平衡二叉树）
 * 是一颗空树
 * 或者它的左右子树的高度差的绝对值不超过1，并且左右两颗子树都是平衡二叉树
 * 平衡因子，左子树和右子树的高度差
 */
class Node {
  constructor(val) {
    this.val = val; // 节点的键值
    this.left = null; // 指向左节点的指针
    this.right = null; // 指向右节点的指针
  }
  toString() {
    return `${this.val}`;
  }
}

class AVLTree {
  constructor() {
    // 初始化根节点
    this.root = null;
  }

  // 获取高度
  getHeight(node) {
    return node === null
      ? -1
      : Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // 循环计算一个节点的平衡因子并返回其值
  getBalanceFactor(node) {
    return node === null
      ? 0
      : Math.abs(this.getHeight(node.left) - this.getHeight(node.right));
  }

  // LL型 右旋
  rotationLL(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    temp.height =
      Math.max(this.getHeight(temp.left), this.getHeight(temp.right)) + 1;
    return temp;
  }

  // RR型 左旋
  rotationRR(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    temp.height =
      Math.max(this.getHeight(temp.left), this.getHeight(temp.right)) + 1;
    return temp;
  }

  // LR型 先左旋再右旋
  rotationLR(node) {
    // 右旋在后所以先旋转左子节点
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  // RL型 先右旋再左旋
  // 左旋在后所以先旋转右子节点
  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }

  // 寻找最小节点
  minimum(node) {
    let temp = node;
    while (node.left) {
      temp = node.left;
    }
    return temp;
  }

  // 插入节点
  insert(val) {
    this.root = this.insertNode(this.root, val);
  }
  // 插入操作有3种情况
  insertNode(node, val) {
    // 第一种情况，node为null,直接插入一个新node
    if (node === null) {
      return new Node(val);
      // 第二种情况，val小于node.val需要插入左子树
    } else if (val < node.val) {
      node.left = this.insertNode(val, node.left);
    }
  }
}
