/**
 * 使用 promise 模拟 setTimeout
 * @param {function} callback
 * @param {number} delay
 */
function _setTimeout(callback, delay) {
  const timeRec = Date.now();
  let promise = Promise.resolve();
  const inject = () => {
    const cur = Date.now() - timeRec;
    if (cur > delay) {
      callback();
    } else {
      promise = promise.then(inject);
    }
  };
  inject();
}

_setTimeout(() => {
  console.log(123);
}, 1000);
