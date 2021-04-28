var body = document.body;

var nums = [1,2,3,4,5,6,7,8,9];
var array = [];

for (var i = 0; i < 4; i += 1) {
    var popped = nums.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(popped);
}

console.log(array);

var result = document.createElement('h1');
body.append(result);
var form = document.createElement('form');

document.body.append(form);
var input = document.createElement('input');
input.type = 'text';
input.maxLength = 4;
form.append(input);
var button = document.createElement('button');
button.textContent = 'input!';
form.append(button);

var wrong = 0;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var answer = input.value;
    if (answer === array.join('')) {
        result.textContent = "home run!";
        input.value = '';
        nums = [1,2,3,4,5,6,7,8,9];
        array = [];
        for (var i = 0; i < 4; i += 1) {
            var popped = nums.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            arrays.push(popped);
        }
        input.focus();
        wrong = 0;
    } else {
        var answerArr = answer.split('');
        var strike = 0;
        var ball = 0;
        wrong += 1;
        if (wrong > 10) {   //10번 넘게 틀린 경우
            result.textContent = 'failure! the answer is ' + array.join();
            input.value = '';
            input.focus();
        } else {
            for (var i = 0; i < 3; i += 1) {
                if (Number(answerArr[i]) === array[i]) {
                    strike += 1;
                    //같은 자리인 지는 위에서 구분됨.
                } else if (array.indexOf(Number(answerArr[i])) > -1) {
                    ball += 1;
                }
            }
            result.textContent = strike + 'strike' + ball + 'ball.';
            input.value = '';
            input.focus();
        }
    }
});