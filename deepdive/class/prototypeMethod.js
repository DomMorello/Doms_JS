class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`my name is ${this.name}`);
  }
}

const me = new Person('Lee');
me.sayHi();