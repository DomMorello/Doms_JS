const person = {
  name: 'Lee',
  address: 'Seoul',
};

console.log('name' in person);
console.log('address' in person);
console.log('age' in person);

const person2 = {
  name: 'Lee',
};

console.log(Reflect.has(person, 'name'));
console.log(Reflect.has(person, 'toString'));