// ES6 Class写法
class Singleton {
  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }

  test() {
    console.log('singleton');
  }
}

// ES5 写法
function Singleton2() {}
Singleton2.getInstance = (function () {
  let instance = null;
  return function () {
    if (!instance) {
      instance = new Singleton2();
    }
    return instance;
  };
})();

// 测试
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1 === s2);
