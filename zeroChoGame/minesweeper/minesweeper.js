document.querySelector('#exec').addEventListener('click', function () {
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);
    //화면에서 입력받는 크기를 저장해 둔다.
    
    //지뢰 위치를 랜덤하게 뽑기
    var array = Array(hor * ver)
        .fill()
        .map(function (elem, idx) {
            return idx;
        });
    var shuffle = [];
    var len = array.length;
    while (array.length > len - mine) { //mine의 개수만큼만 반복
        var move = array.splice(Math.floor(Math.random() * array.length), 1)[0];
        shuffle.push(move);
    }
    console.log('shuffle', shuffle);
    //전체 테이블 만드는 과정
    var dataset = [];
    var tbody = document.querySelector('#table tbody');
    for (var i = 0; i < ver; i += 1) {
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for (var j = 0; j < hor; j += 1) {
            arr.push(1);
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    
    //지뢰 심기
    for (var k = 0; k < shuffle.length; k += 1) {
        var x = Math.floor(shuffle[k] / ver);
        var y = shuffle[k] % hor;
        tbody.children[x].children[y].textContent = 'X';
        dataset[x][y] = 'X';
    }
    console.log(dataset);
});