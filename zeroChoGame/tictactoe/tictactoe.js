var body = document.body;
var table = document.createElement('table');
var rows = [];
var cols = [];
var turn = 'x';

var callBack = function(e) {
    //e 매개변수를 이용해서 target 그 자체를 가리킬 수 있고 그 자체를 가리키는 객체를 통해서
    //부모의 노드에 접근할 수도 있고 자식 노드에 접근할 수도 있다.
    //브라우저에서 노드 트리를 만들기 때문에 그것을 해석해서 접근이 가능한 것이다.
    var whichRow = rows.indexOf(e.target.parentNode);
    console.log('whichRow', whichRow);
    var whichCol = cols[whichRow].indexOf(e.target);
    console.log('whichCol', whichCol);

    if (cols[whichRow][whichCol].textContent !== '') { //칸이 이미 채워져 있는가?
        console.log('not empty');
    } else {    //빈칸이면
        cols[whichRow][whichCol].textContent = turn;
        //세 칸이 다 채워졌나?
        var full = false;
        //가로줄 검사
        if (cols[whichRow][0].textContent === turn && cols[whichRow][1].textContent === turn && cols[whichRow][2].textContent === turn) {
            full = true;
        }
        //세로줄 검사
        if (cols[0][whichCol].textContent === turn &&  cols[1][whichCol].textContent === turn && cols[2][whichCol].textContent === turn) {
            full = true;
        }
        //대각선 검사
        if (whichRow - whichCol === 0 || Math.abs(whichRow - whichCol) === 2) {    //대각선 검사가 필요한 경우
            if (cols[0][0].textContent === turn && cols[1][1].textContent === turn && cols[2][2].textContent === turn) {
                full = true;
            }
            //역대각선 검사
            if (cols[0][2].textContent === turn && cols[1][1].textContent === turn && cols[2][0].textContent === turn) {
                full = true;
            }
        }
        //다 찼으면
        if (full) {
            alert(turn + ' VICROTY!!');
            //초기화
            turn = 'x';
            cols.forEach(function (row) {
                row.forEach(function (col) {
                    col.textContent = '';
                })
            });
        } else {    //다 안 찼으면
            if (turn === 'x') {
                turn = 'o';
            } else {
                turn = 'x';
            }
        }
    }
};

for (var i = 1; i <= 3; i += 1) {
    var row = document.createElement('tr');
    rows.push(row);
    cols.push([]);
    for (var j = 1; j <= 3; j += 1) {
        var col = document.createElement('td');
        col.addEventListener('click', callBack);
        cols[i - 1].push(col);
        row.appendChild(col);
    }
    table.appendChild(row);
}
body.appendChild(table);
console.log('rows', rows, 'cols', cols);

