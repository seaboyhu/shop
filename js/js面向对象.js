// var person={
//     name:"huliu",
//     age:22,
//     eat:function(){
//         alert("能吃")//记住：这个地方不带；或者，或者其他符号
//     }
// }
// alert(person.name);

function person(){
}
Person.prototype={
    name:"iwen",
    age:30,
    eat:function(){
        alert("我在吃")
    }
}
var p=new Person();
