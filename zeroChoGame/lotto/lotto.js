// var nums = Array(45);   //큰 배열을 만들 때 이런 객체를 사용하기도 한다. 
//console로 확인을 해보면 empty라고 나와있으면 각각의 요소는 undefined인데
//이를 forEach로 반복하려고 하면 불가하다.

var arr = Array(45)
        .fill()
        .map(function (elem, idx) {
            return idx + 1;
        });

var shuffle = [];
while (arr.length > 0) {
    //splice는 배열을 반환한다. 여기서는 크기가 1인 배열이므로 [0]로 그 값에 접근한다.
    var tmp = arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
    shuffle.push(tmp);
}
console.log(shuffle);
var bonus = shuffle[shuffle.length - 1];
var picked = shuffle.slice(0, 6);
console.log(picked.sort(function (p, c) { return p - c}), bonus);
//sort 함수를 그대로 쓰면 숫자의 크기와는 상관없이
//앞 자리수를 먼저 비교하고 그 다음 자릿수를 비교하는 방식으로 된다.
//오름차순으로 정렬하고 싶을 때는 sort 함수에 매개변수로
//위와 같은 함수를 넣어주면 오름차순 정렬이 된다
//위에서 c - p 로 바꾸면 내림차순 정렬이 된다
//원리는 p, c가 각각 앞의 원소와 뒤의 원소를 가리키는데
//둘의 차를 구해서 0보다 크면 배열의 위치를 바꾸고 작으면 놔둔다.
//특정 알고리즘을 사용하여 이 원리로 정렬한다


// for (var i = 0; i < picked.length; i += 1) {
    //     setTimeout(function() { //1초에 한 번씩 실행하게 하는 비동기
    //         var ball = document.createElement('div');
    //         ball.textContent = picked[i];
    //         result.appendChild(ball);
    //     }, 1000);
    // }
    //이렇게 했을 때 제대로 실행이 안 되는데
    //자바스크립트에서 클로져 문제 때문이다. 원인은 아직 모른다.
    //반복문 안에서 비동기함수가 있을 때 문제가 발생한다.
    //그래서 그냥 1초에 한 번씩이 아니라 그냥 한 번에 출력한다.
    
//html tag id 기준으로 고르기
var result = document.querySelector('#result');

for (var i = 0; i < picked.length; i += 1) {
    var ball = document.createElement('div');
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black'
    ball.style.borderRadius = '10px';
    ball.style.width = '20px';
    ball.style.height = '20px'
    ball.style.textAlign = 'center';
    ball.style.marginRight = '5px';
    ball.style.fontSize = '12px';
    ball.textContent = picked[i];
    result.appendChild(ball);
}
//js에서는 class 가 키워드라서 html 속성으로 쓸 때는 className이라고 써야함

//html클래스 이름으로 태그 고르기
var bonusRoom = document.querySelector('.bonus');
var bonusBall = document.createElement('div');
bonusBall.style.display = 'inline-block';
bonusBall.style.border = '1px solid black'
bonusBall.style.borderRadius = '10px';
bonusBall.style.width = '20px';
bonusBall.style.height = '20px'
bonusBall.style.textAlign = 'center';
bonusBall.style.marginRight = '5px';
bonusBall.style.fontSize = '12px';
bonusBall.textContent = bonus;
bonusRoom.appendChild(bonusBall);
