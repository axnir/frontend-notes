class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (node.val > newNode.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  min(node = this.root) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  max(node = this.root) {
    while (node && node.right !== null) {
      node = node.right;
    }
    return node;
  }

  search(val, node = this.root) {
    if (node === null) {
      return false;
    }
    if (node.val > val) {
      return this.search(val, node.left);
    }
    if (node.val < val) {
      return this.search(val, node.right);
    }
    return node;
  }

  remove(val, node = this.root) {
    if (node === null) {
      return false;
    }
    node = this.search(val, node);

    // 无子节点的情况
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }
    // 有一个子节点的情况
    if (node.left === null) {
      node = node.right;
      return node;
    }
    if (node.right === null) {
      node = node.left;
      return node;
    }
    // 有两个子节点的情况
    const aux = this.min(node.right);
    node.val = aux.val;
    node.right = this.remove(aux.val, node.right);
    return node;
  }
}

try {
  const bin = new BinarySearchTree();
  bin.insert(11);
  bin.insert(7);
  bin.insert(15);
  bin.insert(5);
  bin.insert(3);
  bin.insert(9);
  bin.insert(10);
  bin.insert(14);
  bin.insert(16);
  console.log(bin);
  console.log(bin.remove(15));
  console.log(bin);
} catch (e) {
  console.warn(e);
}
