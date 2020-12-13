// 第一种
// var pi=function pitya



// 第二种
// let pea1='return '+'`我是一粒${name}`';
// let peanut5 = new Function('name',pea1);
// console.log(peanut5("花生"));

// 与上段代码作用一样
var peanut6 = function(name){
    return "我是一粒"+name;
}
