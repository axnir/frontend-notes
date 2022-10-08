const h = (tag, data = null, children = null) => {
  return {
    _isVNode: true,
    tag,
    data,
    children,
  };
};

const div = h('div');

console.log(div);
