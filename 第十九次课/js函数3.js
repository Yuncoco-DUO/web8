// var lichee=function(){
//     console.log("this is lichee1");
//     return "this is lichee2"
// }
// var result =lichee()

// var lichee=function(){
//     console.log("this is lichee1");
//     return "this is lichee2"
// }()

//  +function lichee2(){
//      console.log("this is lichee2");
//  }()

// -function lichee2(){
//     console.log("this is lichee2");
// }()

// ~function lichee2(){
//     console.log("this is lichee2");
// }()

// +-~ 可以防止（）报错

// var temp3=()=>
// function(){
//     console.log("this is Anonymous function")}()
// temp3()

// var temp3=()=>
// function(){
//     console.log("this is Anonymous function")}
// temp3()()

// var temp3=()=>{
// return function(){
//     console.log("this is Anonymous function")}}
// temp3()()

// 以上三段代码同样意思

// var ob1={
//     name:"this is my name",
//     printName:function(){
//         console.log(this.name);
//     }
// }
// // ob1.printName()
// ob1["printName"]() // 与上句代码同义


// ?

// var pitaya=function(){
//     return 266;
// }
// var apple20=function(x){
//     console.log(x());
// }
// apple20(function(){
//     return "this is pitaya";
// })

// var jujube=function(i){
//     console.log(i);
// }  //()

// jujube()

// 闭包
(function(i){
    console.log(i())
})(function(){})
x(1200)