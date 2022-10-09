function searchParamsToMap(url) {
  const index = url.indexOf('?');
  const str = url.substring(index + 1, url.length);
  const arr = str.split('&');
  const map = new Map();
  arr.forEach((item) => {
    const res = item.split('=');
    map.set(res[0], res[1]);
  });
  return map;
}

const url = 'https://www.test.com/?a=123&b=456&c=qwert';
console.log(searchParamsToMap(url));
