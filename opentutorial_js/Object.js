// var grades = {'egoing':10, 'k8805':6, 'domMorello':80};

// var grades = {};
// grades['egoing'] = 10;
// grades['k8805'] = 6;
// grades['domMorello'] = 80;

// grades.egoinggrades.egoing

// for (key in grades)
// {
//     document.write("key : " + key + ", value : " + grades[key] + "<br>");
// }

var grades = {
    'list' : {'egoing':10, 'kr':8, 'dom':6},
    'show' : function(){
        for (var name in this.list)
        {
            console.log(name, this.list[name]);
        }
    }
}
grades.show();
