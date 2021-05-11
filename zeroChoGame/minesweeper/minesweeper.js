var tbody = document.querySelector('#table tbody');
var dataset = [];
var flag = false;
var count = 0;
var codeTable = {
    opened: -1,
    quest: -2,
    flag: -3,
    mineFlag: -4,
    questFlag: -5,
    mine: 1,
    normal: 0,
};

document.querySelector('#exec').addEventListener('click', function () {
    tbody.innerHTML = '';   //�����Ҷ����� �ʱ�ȭ�ϱ� ����
    document.querySelector('#result').textContent = '';
    dataset = [];   //�����͵� ���ට���� �ʱ�ȭ ����� ��
    flag = false;
    count = 0;
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
    while (array.length > hor * ver - mine) { //mine�� ������ŭ�� �ݺ�
        var move = array.splice(Math.floor(Math.random() * array.length), 1)[0];
        shuffle.push(move);
    }
    //��ü ���̺� ����� ����
    for (var i = 0; i < ver; i += 1) {
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for (var j = 0; j < hor; j += 1) {
            arr.push(codeTable.normal);
            var td = document.createElement('td');
            td.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                if (flag) {
                    return ;    //���� ������ ������Ŭ���� �� �ž� �Ѵ�.
                }
                var parentTr = e.currentTarget.parentNode;
                var parentTbody = e.currentTarget.parentNode.parentNode;
                var col = Array.prototype.indexOf.call(parentTr.children, e.currentTarget);
                var row = Array.prototype.indexOf.call(parentTbody.children, parentTr);

                //�� �� ��Ŭ���� ����ǥ, ����ǥ�� ��Ŭ���ϸ� ����ǥ, ����ǥ�� ��Ŭ���ϸ� ���� ���� �����ֱ�
                if (e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X') {
                    e.currentTarget.textContent = '!';
                    e.currentTarget.classList.add('flag');
                    if (dataset[row][col] === codeTable.mine) {
                        dataset[row][col] = codeTable.mineFlag;
                    } else {
                        dataset[row][col] = codeTable.flag;
                    }
                } else if (e.currentTarget.textContent === '!') {
                    e.currentTarget.textContent = '?';
                    e.currentTarget.classList.remove('flag');
                    e.currentTarget.classList.add('question');
                    if (dataset[row][col] === codeTable.mineFlag) {
                        dataset[row][col] = codeTable.questFlag;
                    } else {
                        dataset[row][col] = codeTable.quest;
                    }
                } else if (e.currentTarget.textContent === '?') {
                    e.currentTarget.classList.remove('question');
                    //���ڴ� ������� ���ڷ� �����ְ� ���ڰ� �ƴ� �κ��� ������� ��ĭ �����ֱ�
                    if (dataset[row][col] === codeTable.questFlag) {
                        e.currentTarget.textContent = 'X';
                        dataset[row][col] = codeTable.mine;
                    } else {
                        e.currentTarget.textContent = '';
                        dataset[row][col] = codeTable.normal;
                    }
                }
                //data�� ȭ���� ��ġ��Ű�� �κ��� �׻� ����ؾ� �Ѵ�.
                //����Ʈ, �並 Ȱ���ϸ� �̷� �������� ���� �ذ��ϱ� ����.
            });
            td.addEventListener('click', function (e) {
                if (flag) { //������ ������ ��� Ŭ�� ���̻� ���� �ʵ���
                    return ;
                }
                var parentTr = e.currentTarget.parentNode;
                var parentTbody = e.currentTarget.parentNode.parentNode;
                var col = Array.prototype.indexOf.call(parentTr.children, e.currentTarget);
                var row = Array.prototype.indexOf.call(parentTbody.children, parentTr);
                if ([codeTable.opened, codeTable.flag, codeTable.mineFlag, codeTable.questFlag, codeTable.quest].includes(dataset[row][col])) {
                    return ;
                }
                e.currentTarget.classList.add('opened');    //css�� �ٲ� ��Ÿ���� �����ϰ� ���⼭ Ŭ������ �߰����� �� �ִ�.
                //���ڸ� ������ ������ �ٸ� �κ��� ������ ���� ��ġ�� �θ��� �ִ� (around)
                //8�� ĭ�� ���ڰ� �� �� �ִ����� ���� ĭ�� ���ڷ� �����ش�.
                count += 1; //ĭ�� �� ������ +1 �� ���ش�. ���ڸ� �� ã�Ҵ����� �˻��ϱ� ����
                if (dataset[row][col] === codeTable.mine) {
                    e.currentTarget.textContent = 'Boom';
                    document.querySelector('#result').textContent = "FAIL!!!!";
                    flag = true;
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
                        return [codeTable.mine, codeTable.mineFlag, codeTable.questFlag].includes(v);
                    }).length;
                    e.currentTarget.textContent = aroundNum || '';  //aroundNum�� false�̸� �ڿ����� ���
                    dataset[row][col] = codeTable.opened;
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
                        dataset[row][col] = 1;  //0�̾��� �κ��� Ŭ���ϸ� 1�� �ٲ������ν� �ݺ��Ǵ� �۾��� �ּ�ȭ��
                        aroundRoom.filter(function (v) {
                            return !!v;
                        }).forEach(function (next) {
                            var parentTr = next.parentNode;
                            var parentTbody = next.parentNode.parentNode;
                            var col = Array.prototype.indexOf.call(parentTr.children, next);
                            var row = Array.prototype.indexOf.call(parentTbody.children, parentTr);
                            if (dataset[row][col] !== codeTable.opened) {
                                next.click();
                            }
                        });
                    }
                }
                if (count === hor * ver - mine) {
                    flag = true;
                    document.querySelector('#result').textContent = 'SUCCESS!!!';
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
        dataset[x][y] = codeTable.mine;
    }
});
