var screen = document.querySelector('#screen');

var status = {

};

var start;  //���۽ð�
var end; //���ð�
var record = [];
var timeout;

screen.addEventListener('click', function() {

    if (screen.classList.contains('waiting')) { //���� �غ� �������� �ľ�
        screen.classList.remove('waiting');
        screen.classList.add('ready');
        screen.textContent = 'Click when it turns green';
        timeout = setTimeout(function () {
            start = new Date();
            screen.click();
        }, Math.floor(Math.random() * 1000 + 2000));
    } else if (screen.classList.contains('ready')) {
        if (!start) { //��ٸ��� �ʰ� Ŭ���� ���� �� ���
            clearTimeout(timeout);
            screen.classList.remove('ready');
            screen.classList.add('waiting');    //ó�� �ʱ�ȭ������ �ٽ� ���ư���.
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