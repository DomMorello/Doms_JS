const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    console.log(`Hi! my name is ${this.name}`);
  };

  return Person;
}());

const me = new Person('Lee');

me.sayHello = function () {
  console.log(`Hey! my name is ${this.name}`);
};

me.sayHello();

delete me.sayHello;

me.sayHello();

Person.prototype.sayHello = function () {
  console.log(`Hey! my name is ${this.name}`);
};

me.sayHello();

delete Person.prototype.sayHello;
me.sayHello();  //error