function inheritPrototype(subType, superType) {
  const proto = Object.create(superType.prototype);
  proto.constructor = subType;
  subType.prototype = proto;
}

function SuperType(name) {
  this.name = name;
}

SuperType.prototype.say = function () {
  console.log(`hi, my name is ${this.name}`);
};

function SubType(name) {
  SuperType.call(this, name);
}

inheritPrototype(SubType, SuperType);

const subType = new SubType('mimi');
subType.say();
