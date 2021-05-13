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
        //�ݺ��� �ȿ��� �񵿱� �Լ��� ������� �� �߻��ϴ� Ŭ����������
        //�ذ��ϱ� ���� ��� �����Լ��� ���� �������� �����Ѵ�.
        (function (c) {
            c.addEventListener('click', function() {
                console.log(openedCard);
                if (clickFlag && !openedCard.includes(c)) {    //���� �߿��� ��¤�� ���ϰ�
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
                                //�����ϸ� ��� html�±׸� ����� �ٽ� setting�� �����Ѵ�.
                                document.querySelector('#wrapper').innerHTML = '';
                                colorTmp = colorArr.slice();
                                color = [];
                                openedCard = [];
                                startTime = null;
                                shuffle();
                                cardSetting(hor, ver);
                            }
                        } else {    //�� ���� ī�尡 ������ �ٸ���
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
    //ó���� �� �徿 ��� ī�尡 ������.
    document.querySelectorAll('.card').forEach(function (card, index) {
        setTimeout(function() {
            card.classList.add('flipped');
        }, 1000 + 100 * index);
    });
    //5�� ���� ����ڿ��� ������ �Ŀ� �ٽ� ī�带 ���� ���´�.
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