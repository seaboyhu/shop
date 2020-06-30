(function(){
    var n="ime";
    function People(name){
        this._name=name;
    }
    People.prototype.say=function(){
        alert("peo-hello"+this._name+n);//要加“”的呢(父类)
    }
    window.People=People;
}());
//可以用小括号加(function)包裹起来(外部不可能直接找到)
(function(){
    function Student(name){
        this._name=name;
    }
    Student.prototype = new People();
    var superSsay=Student.prototype.say;
    Student.prototype.say=function(){
        superSsay.call(this);
        alert("stu-hello"+this._name+n);//（子类）(显示这里没有找到，因为n在上面的function里被隐藏了)
    }
    window.Student=Student;
}());

var s = new Student("iwen");
s.say()