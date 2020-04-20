// var arr = new Array('a','b','c','d','e');

// function getRandomValFromArr(arr){
//     var index = Math.floor(arr.length * Math.random());
//     return arr[index];
// }
// console.log(getRandomValFromArr(arr));

Array.prototype.random = function(){
    var index = Math.floor(this.length * Math.random());    
    return this[index];
}
var arr = new Array('a','b','c','d','e');
console.log(arr.random());