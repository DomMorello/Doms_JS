var screen = document.querySelector('#screen');

var status = {

};

screen.addEventListener('click', function() {
    if (screen.classList.contains('waiting')) { //현재 준비 상태인지 파악
        screen.classList.remove('waiting');
        screen.classList.add('ready');
        screen.textContent = 'Click when it turns green';
    } else if (screen.classList.contains('ready')) {
        screen.classList.remove('ready');
        screen.classList.add('now');
        screen.textContent = 'Click!';
    } else if (screen.classList.contains('now')) {
        screen.classList.remove('now');
        screen.classList.add('waiting');
        screen.textContent = 'Click to start!';
    }
});