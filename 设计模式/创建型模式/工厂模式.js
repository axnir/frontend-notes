/**
 * 实体类：Cat、Dog
 */
class Cat {
  run() {
    console.log('猫');
  }
}

class Dog {
  run() {
    console.log('狗');
  }
}

/**
 * 工厂类：Animal
 */

class Animal {
  constructor(name) {
    name = name.toLowerCase();

    switch (name) {
      case 'dog':
        return new Dog();
      case 'cat':
        return new Cat();
      default:
        throw TypeError('class name wrong');
    }
  }
}

/**
 * 测试
 */

const dog = new Animal('dog');
dog.run();
const cat = new Animal('cat');
cat.run();
