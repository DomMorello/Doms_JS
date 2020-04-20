function func(){
    if (window === this){
        document.write("window === this");
    }
}
func();

var o = {
    func : function(){
        if (o === this){
            document.write("o === this");
        }
    }
}

o.func();

var funcThis = null;

function Func(){
    fucnThis = this;
}

var o1 = Func();
if (funcThis === window){
    document.write('window </br>');
}

var o2 = new Func();
if (funcThis === o2){
    document.write('o2 </br>');
}

var sum2 = new Function('x','y','return x+y');

