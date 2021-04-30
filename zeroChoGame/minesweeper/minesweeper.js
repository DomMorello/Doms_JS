var tbody = document.querySelector('#table tbody');
var dataset = [];
document.querySelector('#exec').addEventListener('click', function () {
    tbody.innerHTML = '';   //실행할때마다 초기화하기 위함
    dataset = [];   //데이터도 실행때마다 초기화 해줘야 함
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
    //전체 테이블 만드는 과정
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

                dataset[row][col] = 1;  //0이었던 부분을 클릭하면 1로 바꿔줌으로써 반복되는 작업을 최소화함
                //한 번 우클릭은 느낌표, 느낌표를 우클릭하면 물음표, 물음표를 우클릭하면 원래 정보 보여주기
                if (e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X') {
                    e.currentTarget.textContent = '!';
                } else if (e.currentTarget.textContent === '!') {
                    e.currentTarget.textContent = '?';
                } else if (e.currentTarget.textContent === '?') {
                    //지뢰는 원래대로 지뢰로 돌려주고 지뢰가 아닌 부분은 원래대로 빈칸 보여주기
                    if (dataset[row][col] === 1) {
                        e.currentTarget.textContent = '';
                    } else if (dataset[row][col] === 'X') {
                        e.currentTarget.textContent = 'X';
                    }
                }
                //data와 화면을 일치시키는 부분을 항상 고려해야 한다.
                //리액트, 뷰를 활용하면 이런 문제들을 많이 해결하기 쉽다.
            });
            td.addEventListener('click', function (e) {
                var parentTr = e.currentTarget.parentNode;
                var parentTbody = e.currentTarget.parentNode.parentNode;
                var col = Array.prototype.indexOf.call(parentTr.children, e.currentTarget);
                var row = Array.prototype.indexOf.call(parentTbody.children, parentTr);
                e.currentTarget.classList.add('opened');    //css에 바뀔 스타일을 정의하고 여기서 클래스를 추가해줄 수 있다.
                //지뢰를 누르면 터지고 다른 부분을 누르면 누른 위치를 두르고 있는 (around)
                //8개 칸에 지뢰가 몇 개 있는지를 누른 칸에 숫자로 보여준다.
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
                    //선택하는 칸 주변의 지뢰의 개수
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
    
    //지뢰 심기
    for (var k = 0; k < shuffle.length; k += 1) {
        var x = Math.floor(shuffle[k] / ver);
        var y = shuffle[k] % hor;
        tbody.children[x].children[y].textContent = 'X';
        dataset[x][y] = 'X';
    }
});
