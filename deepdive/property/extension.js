const person = { name: 'lee' };

console.log(Object.isExtensible(person));

Object.preventExtensions(person);

person.age = 20;
console.log(person);

delete person.name;
console.log(person);

Object.defineProperty(person, 'age', { value: 20 });