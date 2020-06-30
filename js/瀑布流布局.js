window.onload=function(){
    this.imgLocation("container","box");
}
function imgLocation(parent,content){
    //将parent内容全部取出
    var cparent =document.getElementById(parent);
    var ccontent =getChildElement(cparent,content);
    console.log(ccontent);
}
function getChildElement(parent,content){
    var contentArr=[];
    var allcontent=parent.getElementByTagName("*");
    for(var i=o;i<allcontent.length;i++){
        if(allcontent[i].className==content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}
// 出现错误，在console