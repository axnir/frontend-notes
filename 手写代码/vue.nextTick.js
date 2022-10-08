const callbacks = [];
let pedding = false;

function nextTick(cb) {
  callbacks.push(cb);

  if (!pedding) {
    pedding = true;
    setTimeout(flushCallBack, 0);
  }
}

function flushCallBack() {
  pedding = false;
  let copies = [...callbacks];
  callbacks.length = 0;
  copies.forEach((copy) => {
    copy();
  });
}

nextTick(() => console.log(1));
// callbacks里push这个函数
nextTick(() => console.log(2));
// callbacks里push这个函数
nextTick(() => console.log(3));

// 同步函数优先执行
console.log(4);
