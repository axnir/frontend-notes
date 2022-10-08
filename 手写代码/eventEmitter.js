class eventEmitter {
  constructor() {
    // 所有 eventType 监听器回调函数
    this.listeners = {};
  }

  /**
   * 订阅事件
   * @param {String} eventType 事件类型
   * @param {Function} listener 订阅后发布动作触发的回调函数，参数为发布的数据
   */
  on(eventType, listener) {
    if (!this.listeners[eventType]) {
      this.listeners[eventType] = [];
    }
    this.listeners[eventType].push(listener);
  }

  /**
   * 发布事件
   * @param {String} eventType 事件类型
   * @param {Any} data 发布的内容
   */
  emit(eventType, data) {
    const callbacks = this.listeners[eventType];
    if (callbacks) {
      callbacks.forEach((c) => c(data));
    }
  }

  /**
   * 移除事件
   * @param {String} eventType 类型
   * @param {Function} 要移除的函数
   */
  off(eventType, listener) {
    const callbacks = this.listeners[eventType];
    if (callbacks) {
      this.listeners[eventType] = callbacks.filter((cb) => cb !== listener);
    }
  }

  /**
   * 只执行一次订阅的事件，然后移除
   * @param {String} eventType 事件类型
   * @param {Function} listener 订阅后发布动作触发的回调函数，参数为发布的数据
   */
  once(eventType, listener) {
    const cb = (data) => {
      listener(data);
      this.off(eventType, cb);
    };
    this.on(eventType, cb);
  }
}

/**
 * 测试
 */
const event = new eventEmitter();

const f = (data) => console.log('f: ' + data);
const c = (data) => console.log('c: ' + data);
// event.on('open', f)
event.on('open', c);
event.once('open', f);
event.emit('open', 'success!!!');
event.emit('open', 'success!!!');
