var tbody = document.querySelector('#table tbody');
var dataset = [];
document.querySelector('#exec').addEventListener('click', function () {
    tbody.innerHTML = '';   //�����Ҷ����� �ʱ�ȭ�ϱ� ����
    dataset = [];   //�����͵� ���ට���� �ʱ�ȭ ����� ��
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
    //��ü ���̺� ����� ����
    for (var i = 0; i < ver; i += 1) {
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for (var j = 0; j < hor; j += 1) {
            arr.push(0);
            var td = document.createElement('td');
            td.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                var parentTr = e.currentTarget.parentNode;
                var parentTbody = e.currentTarget.parentNode.parentNode;
                var col = Array.prototype.indexOf.call(parentTr.children, e.currentTarget);
                var row = Array.prototype.indexOf.call(parentTbody.children, parentTr);

                dataset[row][col] = 1;  //0�̾��� �κ��� Ŭ���ϸ� 1�� �ٲ������ν� �ݺ��Ǵ� �۾��� �ּ�ȭ��
                //�� �� ��Ŭ���� ����ǥ, ����ǥ�� ��Ŭ���ϸ� ����ǥ, ����ǥ�� ��Ŭ���ϸ� ���� ���� �����ֱ�
                if (e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X') {
                    e.currentTarget.textContent = '!';
                } else if (e.currentTarget.textContent === '!') {
                    e.currentTarget.textContent = '?';
                } else if (e.currentTarget.textContent === '?') {
                    //���ڴ� ������� ���ڷ� �����ְ� ���ڰ� �ƴ� �κ��� ������� ��ĭ �����ֱ�
                    if (dataset[row][col] === 1) {
                        e.currentTarget.textContent = '';
                    } else if (dataset[row][col] === 'X') {
                        e.currentTarget.textContent = 'X';
                    }
                }
                //data�� ȭ���� ��ġ��Ű�� �κ��� �׻� ����ؾ� �Ѵ�.
                //����Ʈ, �並 Ȱ���ϸ� �̷� �������� ���� �ذ��ϱ� ����.
            });
            td.addEventListener('click', function (e) {
                var parentTr = e.currentTarget.parentNode;
                var parentTbody = e.currentTarget.parentNode.parentNode;
                var col = Array.prototype.indexOf.call(parentTr.children, e.currentTarget);
                var row = Array.prototype.indexOf.call(parentTbody.children, parentTr);
                e.currentTarget.classList.add('opened');    //css�� �ٲ� ��Ÿ���� �����ϰ� ���⼭ Ŭ������ �߰����� �� �ִ�.
                //���ڸ� ������ ������ �ٸ� �κ��� ������ ���� ��ġ�� �θ��� �ִ� (around)
                //8�� ĭ�� ���ڰ� �� �� �ִ����� ���� ĭ�� ���ڷ� �����ش�.
                if (dataset[row][col] === 'X') {
                    e.currentTarget.textContent = 'Boom';
                } else {
                    var around = [
                        dataset[row][col - 1], dataset[row][col + 1]
                    ];
                    if (dataset[row - 1]) {
                        around = around.concat([dataset[row - 1][col - 1], dataset[row - 1][col], dataset[row - 1][col + 1]]);
                    }
                    if (dataset[row + 1]) {
                        around = around.concat([dataset[row + 1][col - 1], dataset[row + 1][col], dataset[row + 1][col + 1]]); 
                    }
                    //�����ϴ� ĭ �ֺ��� ������ ����
                    var aroundNum = around.filter(function (v) {
                        return v === 'X';
                    }).length;
                    e.currentTarget.textContent = aroundNum;
                    if (aroundNum === 0) {
                        var aroundRoom = [];
                        if (tbody.children[row - 1]) {
                            aroundRoom = aroundRoom.concat([
                                tbody.children[row - 1].children[col - 1],
                                tbody.children[row - 1].children[col],
                                tbody.children[row - 1].children[col + 1],
                            ]);
                        }
                        aroundRoom = aroundRoom.concat([
                            tbody.children[row].children[col - 1],
                            tbody.children[row].children[col + 1],
                        ]);
                        if (tbody.children[row + 1]) {
                            aroundRoom = aroundRoom.concat([
                                tbody.children[row + 1].children[col - 1],
                                tbody.children[row + 1].children[col],
                                tbody.children[row + 1].children[col + 1],
                            ]);
                        }
                        aroundRoom.filter(function (v) {
                            return !!v;
                        }).forEach(function (next) {
                            next.click();
                        });
                    }
                }
            });
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
});
