const person = {};

Object.defineProperty(person, 'firstName', {
  value: 'domas',
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, 'lastName', {
  value: 'Morello',
});

//디스크립터 객체에서 프로퍼티를 누락시키면 기본으로 undefined, false 가 된다.
let descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log(descriptor);

console.log(Object.keys(person));
// ['firstName'] lastName은 enumerable이 false이기 때문에 안 됨.

person.lastName = 'holy';
//에러 발생하지 않지만 무시됨

delete person.lastName;
//configurable이 false 이기 때문에 무시됨 에러 없음.

