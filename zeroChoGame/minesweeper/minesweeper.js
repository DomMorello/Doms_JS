document.querySelector('#exec').addEventListener('click', function () {
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);
    //ȭ�鿡�� �Է¹޴� ũ�⸦ ������ �д�.
    
    //���� ��ġ�� �����ϰ� �̱�
    var array = Array(hor * ver)
        .fill()
        .map(function (elem, idx) {
            return idx;
        });
    var shuffle = [];
    var len = array.length;
    while (array.length > len - mine) { //mine�� ������ŭ�� �ݺ�
        var move = array.splice(Math.floor(Math.random() * array.length), 1)[0];
        shuffle.push(move);
    }
    console.log('shuffle', shuffle);
    //��ü ���̺� ����� ����
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
    
    //���� �ɱ�
    for (var k = 0; k < shuffle.length; k += 1) {
        var x = Math.floor(shuffle[k] / ver);
        var y = shuffle[k] % hor;
        tbody.children[x].children[y].textContent = 'X';
        dataset[x][y] = 'X';
    }
    console.log(dataset);
});