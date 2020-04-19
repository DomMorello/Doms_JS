// function outter(){
//     var title = 'coding everybody';
//     return function(){
//         alert(title);
//     }
// }
// var inner = outter();
// inner();

// function factory_movie(title){
//     return {
//         get_title : function(){
//             return title;
//         },
//         set_title : function(_title){
//             if (typeof _title === 'String')
//                 title = _title;
//             else
//                 alert('title must be string.');
//         }
//     }
// }
// ghost = factory_movie('Ghost in the shell');
// matrix = factory_movie(Matrix);

var arr = [];
for (var i = 0; i < 5; i++){
    arr[i] = function(id){
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr){
    console.log(arr[index]());
}
