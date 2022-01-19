const person = {
  firstName: 'Dom',
  lastName: 'Morello',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
};

//접근자 프로퍼티 fullName에 값을 저장하면 setter함수가 호출됨
person.fullName = 'dom hardy';

//접근자 프로퍼티 fullNmae에 접근하면 getter 함수가 호출됨
console.log(person.fullName);

let descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);