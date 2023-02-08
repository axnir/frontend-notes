/**
 * 215. 数组中的第K个最大元素
 * 涉及的知识点：最小堆
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
 */

/**
 * 最小堆
 * 堆是一种特殊的完全二叉树
 * 使用 数组 实现堆数据结构
 * 实现 插入节点、删除堆顶、获取堆顶、获取堆长度 功能
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 节点交换位置
  swap(i1, i2) {
    // ES5 写法
    // const temp = this.heap[i1]
    // this.heap[i1] = this.heap[i2]
    // this.heap[i2] = temp

    // ES6 写法
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  // 获取亲代节点位置
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  // 获取左子节点位置
  getLeftIndex(i) {
    return 2 * i + 1;
  }

  // 获取右子节点位置
  getRightIndex(i) {
    return 2 * i + 2;
  }

  // 节点上移
  shiftUp(index) {
    // 到堆顶时停止上移
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      // 交换之后，继续上移
      this.shiftUp(parentIndex);
    }
  }

  // 节点下移
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    // 处理左侧子节点
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      // 继续下移
      this.shiftDown(leftIndex);
    }
    // 处理右侧子节点
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      // 继续下移
      this.shiftDown(rightIndex);
    }
  }

  /**
   * 插入节点
   * 步骤：
   *  1. 将值插入堆的地步，即数组的尾部
   *  2. 然后上移：将这个值和它的亲代节点进行交换，直到亲代节点小于等于这个插入的值
   */
  insert(val) {
    this.heap.push(val);
    this.shiftUp(this.heap.length - 1);
  }

  /**
   * 删除堆顶
   * 步骤：
   *  1. 用数组尾部元素替换堆顶（直接删除堆顶会破坏堆结构）
   *  2. 然后下移：将心堆顶和它的子节点惊醒交换，直到子节点大于等于这个新堆顶
   *  3. 大小为 k 的堆中删除堆顶的时间复杂度为 O(logk)
   */
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }

  // 获取堆顶
  peek() {
    return this.heap[0];
  }

  // 获取堆的长度
  size() {
    return this.heap.length;
  }
}

const findKthLargest = function (nums, k) {
  const heap = new MinHeap();
  for (let i = 0; i < nums.length; i++) {
    heap.insert(nums[i]);
    if (heap.size() > k) {
      heap.pop();
    }
  }
  return heap.peek();
};

// 测试
const nums = [3, 2, 1, 5, 6, 4],
  k = 2;
console.log(findKthLargest(nums, k));
