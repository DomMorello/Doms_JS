var person = {};

person.name = 'dom';
person.introduce = function(){
    return 'My name is '+this.name;
}

document.write(person.introduce());

var person = {
    'name' : 'dom',
    'introduce' : function(){
        return 'My name is '+this.name;
    }
}

function Person(){}
var p = new Person();
p.name = 'dom';
p.introduce = function(){
    return 'My name is '+this.name;
}

function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'Mu name is '+this.name;
    }
}
var p1 = new Person('dom');
var p2 = new Person('leezche');
