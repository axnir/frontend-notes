const promiseAll = (iterator) => {
  let len = iterator.length;
  const res = [];
  let index = 0;
  return new Promise((resolve, reject) => {
    for (let item of iterator) {
      Promise.resolve(item)
        .then((data) => {
          res[i] = data;
          index++;
          if (index === len) {
            resolve(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};
