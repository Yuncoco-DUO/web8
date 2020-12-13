// 第一题 this is nut-1

// var nut = function(){
//     console.log("this is nut-1")
//     return "this is nut-2"
// }
// nut()



// 第二题  this is lichee-1

// var lichee = function(){
//     console.log("this is lichee-1");
//     return "this is lichee-2"
// }()

// 第三题  
// this is watermelon-1
// this is pear-1


// var watermelon = function(){
//     console.log("this is watermelon-1")
//     return function pear(){
//         console.log("this is pear-1");
//     }
// }
// watermelon()()

// 第四题  this is banana-1   this is Anonymous function

// let banana = function banana() {
//     console.log("this is banana-1")
//     return () => function () {
//         console.log("this is Anonymous function")
//     }()
// }
// banana()()

// 第五题 ？

// let grape = function redGrape() {
//     return {
//         name: "my name is red grape",
//         printMyName: () => {
//             return () => {
//                 return Object.create({
//                     name: "my name is grape nut",
//                     printMyGrapeNut: function () {
//                         console.log("this is MyGrapNut")
//                     }
//                 })
//             }
//         }
//     }
// }
// grape().printMyName()().printMyGrapeNut()

// 第六题  20000 ？

// var redPlum = () => {
//     return 100
// }
// var bluePlum = (blue) => {      // bluePlum函数等同于blue
//     return 200 * blue()
// }
// var plum = (plum2, plum1) => {
//     let result = plum1(plum2)
//     console.log(result);
// }
// plum(redPlum, bluePlum)

// 第七题  ？
// let red = function readApple() {
//     return () => {
//         return function () {
//             return () => {
//                 return function () {
//                     console.log("this is red apple")
//                     return "this is blue apple"
//                 }
//             }
//         }
//     }
// }
// let apple = function redApple() {
//     console.log(" ? ")
// }() 

// 第八题 
// this is orange
// this is yellow orange
// this is blue orange
// undefined 加return 0

// (function (x) {
//     x()
//     console.log("this is yellow orange")
//     console.log(function blueOrange() {
//         console.log("this is blue orange")
// // return 0
//     }())

// })(function () {
//     console.log("this is orange")
//     return "this is red orange"
// })
// 传参到X()

// 第九题  blackOrange()

// var blackOrange = ()=> 
// function(){
//     console.log("this is small orange") 
//     return function(){ 
//         console.log("this is big orange") 
//     }()
// }()
// blackOrange()

// 第十题 打印9999

// let blackberry = function () {
//     console.log("this is blackberry")
//     return {
//         smallBlackberry: () => {
//             console.log("this is smallBlackberry")
//             return () => {
//                 console.log("this is smallBlackberry nut ")
//                 return 9999
//             }
//         }
//     }
// }() 
// blackberry(smallBlackberry）()()

// 第十一题
// this is blueNut
// this is small nut
// this is yellowNut
// this is middle nut
// 500

// function bigNut(func) {
//     let smallNut = function (s) {
//         s()
//         console.log("this is small nut")
//         return 200
//     }
//     let middleNut = function (m) {
//         m()
//         console.log("this is middle nut")
//         return 300
//     }
//     return func(smallNut, middleNut)
// }
// function redNut(x, y) {
//     function blueNut() {
//         console.log("this is blueNut")
//     } function yellowNut() {
//         console.log("this is yellowNut")
//     } return () => {
//         console.log(x(blueNut) + y(yellowNut))
//     }
// } bigNut(redNut)()

//第十二题
// this is nut
// this is lichee
// var haw = (x, y) => {
//     return () => {
//         x(y)
//     }
// }
// function lichee(li) {
//     console.log(li())
// }
// function nut() {
//     console.log("this is nut");
//     return "this is lichee"
// }
// haw(lichee, nut)()