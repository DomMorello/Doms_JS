var hor = 4;
var ver = 3;
var colorArr = ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'white', 'white', 'pink', 'pink'];
var colorTmp = colorArr.slice();
var color = [];
var clickFlag = true;
var clickCard = [];
var openedCard = [];
var startTime;

function shuffle() {
    for (var i = 0; colorArr.length > 0; i += 1) {
        color = color.concat(colorArr.splice(Math.floor(Math.random() * colorArr.length), 1));
    }
}

function cardSetting(hor, ver) {
    clickFlag = false;
    for (var i = 0; i < hor * ver; i += 1) {
        var card = document.createElement('div');
        card.className = 'card';
        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.style.backgroundColor = color[i];
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        document.body.appendChild(card);
        //반복문 안에서 비동기 함수를 사용했을 때 발생하는 클로저문제를
        //해결하기 위해 즉시 시행함수를 통해 스코프를 조정한다.
        (function (c) {
            c.addEventListener('click', function() {
                console.log(openedCard);
                if (clickFlag && !openedCard.includes(c)) {    //세팅 중에는 뒤짚지 못하게
                    c.classList.toggle('flipped');
                    clickCard.push(c);
                    if (clickCard.length === 2) {
                        if (clickCard[0].querySelector('.card-back').style.backgroundColor === clickCard[1].querySelector('.card-back').style.backgroundColor) {
                            openedCard.push(clickCard[0]);
                            openedCard.push(clickCard[1]);
                            clickCard = [];
                            if (openedCard.length === 12) {
                                var endTime = new Date();
                                alert('SUCCESS! in ' + (endTime - startTime) / 1000 + 'sec');
                                //성공하면 모든 html태그를 지우고 다시 setting을 시작한다.
                                document.querySelector('#wrapper').innerHTML = '';
                                colorTmp = colorArr.slice();
                                color = [];
                                openedCard = [];
                                startTime = null;
                                shuffle();
                                cardSetting(hor, ver);
                            }
                        } else {    //두 개의 카드가 색깔이 다르면
                            clickFlag = false;
                            setTimeout(function() {
                                clickCard[0].classList.remove('flipped');
                                clickCard[1].classList.remove('flipped');
                                clickFlag = true;
                                clickCard = [];
                            }, 1000);
                        }
                    }
                }
            });
        })(card);
        document.querySelector('#wrapper').appendChild(card);
    }
    //처음에 한 장씩 모든 카드가 열린다.
    document.querySelectorAll('.card').forEach(function (card, index) {
        setTimeout(function() {
            card.classList.add('flipped');
        }, 1000 + 100 * index);
    });
    //5초 동안 사용자에게 보여준 후에 다시 카드를 전부 덮는다.
    setTimeout(function() {
        document.querySelectorAll('.card').forEach(function(card, index) {
            card.classList.remove('flipped');
        });
        clickFlag = true;
        startTime = new Date();
    }, 5000);
}

shuffle();
cardSetting(hor, ver);