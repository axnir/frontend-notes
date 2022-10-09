/**
 * class 有两条继承关系——类本身和类实例
 */

class Animal {
  constructor() {
    this.name = 'mimi';
    this.food = 'fruit';
  }
  static eat() {
    console.log(this.food);
  }
  say() {
    console.log(this.name);
  }
}

Animal.__proto__.food = 'banana';
// Animal.food = 'apple';

class Cat extends Animal {
  constructor() {
    super();
    this.name = 'wawa';
    this.food = 'meal';
  }
  // static food = 'orange';
  static eat() {
    super.eat();
  }
  say() {
    super.say();
  }
}
// Cat.food = 'orange';
let cat = new Cat();
cat.say();
Cat.eat();
console.log(Animal.__proto__ === Function.prototype);
