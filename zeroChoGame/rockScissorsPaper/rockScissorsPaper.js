var imgAcord = '-50px';
//그냥 객체이지만 딕셔너리 자료구조처럼 활용할 수 있다.
var dictionary = {
    scissors: '-50px',
    rock: '-300px',
    paper: '-580px',
};

//값으로 이름을 찾기 위해 만듦 (권장하지 않음)
// var revDictionary = {
//     '-50px': 'sicssors',
//     '-300px': 'rock',
//     '-580px': 'paper', 
// };

function computerChoice (imgAcord) {
    return Object.entries(dictionary).find(function (v) {
        return v[1] === imgAcord;
    })[0];
}

var interval;
function intervalMaker() {    
    interval = setInterval(function () {
        if (imgAcord === dictionary.rock) {
            imgAcord = dictionary.scissors;
        } else if (imgAcord === dictionary.scissors) {
            imgAcord = dictionary.paper;
        } else {
            imgAcord = dictionary.rock;
        }
        document.querySelector('#computer').style.background = 
            'url(https://thumbs.dreamstime.com/b/rock-paper-scissors-hand-gesture-146405487.jpg) '
            + imgAcord + ' 0';
    }, 100);
}

intervalMaker();

var score = {
    scissors: 1,
    rock: 0,
    paper: -1,
};

//querySelectorAll은 forEach를 지원하기 때문에 이런 식으로 이벤트리스너를 붙인다.
document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        clearInterval(interval);    //인터벌을 멈춘다.
        setTimeout(function () {
            intervalMaker();
        }, 1000);
        var myChoice = this.textContent;
        var myScore = score[myChoice];
        var computerScore = score[computerChoice(imgAcord)];
        var scoreDiff = myScore - computerScore;
        //변수를 활용해서 연산과정을 최소화하는 습관이 좋다.
        if (scoreDiff === 0) {
            console.log('draw!');
        } else if ([-1, 2].includes(scoreDiff)) {
            console.log('win!');
        } else {
            console.log('lose!');
        }
    });
});