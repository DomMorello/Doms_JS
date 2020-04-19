// var pattern = /a/;
// var pattern = new RegExp('a');

// pattern.exec('abcded');
// a
// var patter = /a./;
// CanvasPattern.exec('abcde');
// ab

// patter.test('abcde'); //true false

// var pattern = '/a/';
// // var str = "abcdef";
// // console.log(str.match(pattern)); //a

// var str = 'abcdef';
// str.replace(pattern,'A'); //str = Abcdef

// var xi = /a/;
// "Abcde".match(xi);  //null
// var oi = /a/i;
// "Abcde".match(oi);  //A
// var xg = /a/;
// 'abcdea'.match(xg); //a
// var og = /a/g;
// 'abcdea'.match(og) //a, a
// var ig = /a/ig; 
// 'AabcdAa'.match(ig); //A,a,A,a

// (\w+)\s(\w+)
// A~Z a~z 0~9

// var pattern = /(\w+)\s(\w+)/;
// var str = 'coding everybody';

// var result = str.replace(pattern, "$2, $1");
// console.log(result); //everybody, coding

//JS 에서는 for문 안에 선언된 변수는 지역변수가 아니라 함수 내에서
//한 것이 아니라면 전역변수이다. 
