var screen = document.querySelector('#screen');

var status = {

};

var start;  //시작시간
var end; //끝시간
var record = [];
var timeout;

screen.addEventListener('click', function() {

    if (screen.classList.contains('waiting')) { //현재 준비 상태인지 파악
        screen.classList.remove('waiting');
        screen.classList.add('ready');
        screen.textContent = 'Click when it turns green';
        timeout = setTimeout(function () {
            start = new Date();
            screen.click();
        }, Math.floor(Math.random() * 1000 + 2000));
    } else if (screen.classList.contains('ready')) {
        if (!start) { //기다리지 않고 클릭을 먼저 한 경우
            clearTimeout(timeout);
            screen.classList.remove('ready');
            screen.classList.add('waiting');    //처음 초기화면으로 다시 돌아간다.
            screen.textContent = 'You clicked too fast. try again.';
        } else {
            screen.classList.remove('ready');
            screen.classList.add('now');
            screen.textContent = 'Click!';
        }
    } else if (screen.classList.contains('now')) {
        end = new Date();
        console.log(end - start, 'ms');
        record.push(end - start);
        start = null;
        end = null;
        screen.classList.remove('now');
        screen.classList.add('waiting');
        screen.textContent = 'Click to start!';
    }
});