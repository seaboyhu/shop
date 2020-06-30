function Person(name){//括号里面是参数(用于传递参数和实例化);同时这个也可以像前面的一样用（function包裹起来）
    var _this = {}
    _this._name=name;
    _this.sayHello = function(){
        alert("HHello"+_this._name);
    }
    return _this;
}
function Teacher(name){
    var _this = Person(name);
    var superSay= _this.sayHello;
    _this.sayHello=function(){
        superSay.call(_this);
        alert("Lhello"+_this._name);
    }
    return _this;
}
var t=Teacher("ayang");
t.sayHello();