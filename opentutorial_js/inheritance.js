// function Person(name){
//     this.name = name;
//     this.introduce = function(){
//         return 'My name is '+this.name;
//     }
// }

// var p1 = new Person('dom');
// document.write(p1.introduce() + "<br />");

function Person(name){
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name;
}

function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
Progorammer.prototype.coding = function(){
    return "hello world";
}

function Designer(name){
    this.name = name;
}
Deginer.prototype = new Person();
Deginer.prototype.design = function(){
    return "beautiful";
}

var p1 = new Programmer('dom');
document.write(p1.introduce() + "<br />")
document.write(p1.coding() + "<br />");
document.write(p1.introduce() + "<br />")
document.write(p1.design() + "<br />");

