function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`hi! name is ${this.name}`);
}

const me = new Person('dom');
const you = new Person('morello');

me.sayHello();
you.sayHello();