// var arr = new Array('a','b','c','d','e');

// function getRandomValFromArr(arr){
//     var index = Math.floor(arr.length * Math.random());
//     return arr[index];
// }
// console.log(getRandomValFromArr(arr));

// Array.prototype.random = function(){
//     var index = Math.floor(this.length * Math.random());    
//     return this[index]; 
// }
// var arr = new Array('a','b','c','d','e');
// console.log(arr.random());

// var arr = ["a","b","c"];
// console.log('Object.keys(arr)', Object.keys(arr));
// var o = {"name" : "egoing", "age":"20", "city":"seoul"};
// Obeject.keys(o);

Object.prototype.contain = function(needle){
    for (var name in this){
        if (this[name] === needle){
            return true;
        }
    }
    return false;
} 

var o = {'name':'dom', 'city':'seoul'};
console.log(o.contain('egoing'));
var a = ['dom', 'morello'];
console.log(a.contain('morello'));

for (var name in o){
    if (o.hasOwnProperty(name)){
        console.log(name);
    }
}
