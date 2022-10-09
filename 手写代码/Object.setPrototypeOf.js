if (!Object.setPrototypeOf) {
  // 仅适用于Chrome和FireFox，在IE中不工作：
  Object.prototype.setPrototypeOf = function (obj, proto) {
    if (obj.__proto__) {
      obj.__proto__ = proto;
      return obj;
    } else {
      // 如果你想返回 prototype of Object.create(null):
      const Fn = function () {
        for (const key in obj) {
          Object.defineProperty(this, key, {
            value: obj[key],
          });
        }
      };
      Fn.prototype = proto;
      return new Fn();
    }
  };
}
