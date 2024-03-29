/**
 * 146. LRU 缓存
 * 涉及的知识：哈希表、双向链表
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 * 实现 LRUCache 类：
 *  LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 *  int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 *  void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 */
class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; // 缓存的容量
    this.hash = {}; // 哈希表
    this.count = 0; // 缓存数目
    this.dummyHead = new ListNode(); // 虚拟头节点
    this.dummyTail = new ListNode(); // 虚拟尾节点
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  get(key) {
    const node = this.hash[key]; // 从哈希表中，获取对应的节点
    if (!node) return -1; // 如果节点不存在，返回-1
    this.moveToHead(node); // 被读取了，该节点移动到链表头部
    return node.value; // 返回出节点值
  }

  moveToHead(node) {
    this.removeFormList(node); // 从链表中删除节点
    this.addToHead(node); // 添加到链表的头部
  }

  removeFormList(node) {
    let temp1 = node.prev; // 暂存它的后继节点
    let temp2 = node.next; // 暂存它的前驱节点
    temp1.next = temp2; // 前驱节点的next指向后继节点
    temp2.prev = temp1; // 后继节点的prev指向前驱节点
  }

  addToHead(node) {
    node.prev = this.dummyHead; // node的prev指针，指向虚拟头结点
    node.next = this.dummyHead.next; // node的prev指针，指向虚拟头结点
    this.dummyHead.next.prev = node; // 原来的真实头结点的prev，指向node
    this.dummyHead.next = node; // 虚拟头结点的next，指向node
  }

  // 删除长时间没访问过的
  removeLRUItem() {
    const tail = this.popTail(); // 从链表尾部删除
    delete this.hash[tail.key]; // 从哈希表中删除
    this.count--; // 缓存数目-1
  }

  // 删除链表尾节点
  popTail() {
    const tail = this.dummyTail.prev; // 通过虚拟尾节点查找
    this.removeFormList(tail); // 删除该真实节点
    return tail; // 返回被删除的节点
  }

  put(key, value) {
    const node = this.hash[key]; // 获取链表中的node
    if (!node) {
      // 如果不存在于链表中
      if (this.count === this.capacity) {
        // 容量已满
        this.removeLRUItem(); // 删除最久一次使用的数据
      }
      const newNode = new ListNode(key, value); // 创建新节点
      this.hash[key] = newNode; // 存入哈希表
      this.addToHead(newNode); // 将节点添加到链表头部
      this.count++; // 缓存数目+1
    } else {
      // 存在于链表于的情况
      node.value = value; // 更新value
      this.moveToHead(node); // 讲节点移动到链表头部
    }
  }
}

// 测试
const lRUCache = new LRUCache(2);
console.log(
  lRUCache.put(1, 1), // 缓存是 {1=1}
  lRUCache.put(2, 2), // 缓存是 {1=1, 2=2}
  lRUCache.get(1), // 返回 1
  lRUCache.put(3, 3), // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
  lRUCache.get(2), // 返回 -1 (未找到)
  lRUCache.put(4, 4), // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
  lRUCache.get(1), // 返回 -1 (未找到)
  lRUCache.get(3), // 返回 3
  lRUCache.get(4) // 返回 4
);
