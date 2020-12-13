// function City(){
//     this.cityName=this.cityName;
//     this.cityArea=this.cityArea;
//     this.cityPostcode=this.cityPostcode;
//     this.cityRegions=function(){
//         var orgionName="",
//         var orgionPostcode="",
        
//     };
// }
// var cityRegions=['东湖区','西湖区','青山湖区','新建区']


// 第三题
// ;(function (x){
//     console.log("this is chestnut");
//     return (function(x){
//         console.log("this is haw");
//         x()
//         x.printName=function(){
//             console.log("this is x.printName");
//             return this.name
//         }
//         return 200 + x.printName()+x()
//     })(()=>{
//         this.name=6666
//         console.log("this is pitaya")
//         return 3999
//     })
// })()


// 第四题
// +function $(){ -function(){ 
//     console.log("this is pear") 
//     void function(){ 
//     console.log("this is nut")
//      console.log($.name)
//      }()
//      }() 
//      this.name="my name is $"
//      }()
// 第五题
 


// 第六题  浏览器运行
// function $2(x){ 
//     //console.log(typeof x) 
//     if(typeof x == "string"){
//          let targets = window.document.getElementsByTagName(x)
//           if(targets.length>0){ 
//               let array = targets;
// for (let index = 0; index < array.length; index++)
//  { 
//      const element = array[index];
//       element.style.backgroundColor="red"
//  }
//  }
//  } 
// }
// $2("div")



// 第七题

// Object.tag=100
// Object.prototype.tag=200
// console.log(Object.tag); //100

// Object.tag1=100
// Object.prototype.tag=200
// console.log(Object.tag);  //200

//如何去遍历这个数组 
// var lichees = [ 
//     () => { 
//         return function () {
//              console.log("this is number 1")()
//              }
//              },
//       +function(){console.log("this is number 2")}(),
// { 
//     name:"this is lichee 3" 
// },
// 2000, 
// "this is lichee 4",
//  null, 
//  new Object({}), 
//  Object.create({}), 
//  Object.prototype, 
//  new Object({}).__proto__, 
//  new Date(),
// function licheeNut(){
//      return { 
//          printNut:()=>{ 
//              console.log("thisis printNut") 
//             } 
//         }
//      },
//      Object.prototype.tag = "this is tag", Object.tag 
//     ]


// 第八题 浏览器运行window
// window.$5 = function (){ 
//     console.log("this is $5 in window object") 
// }
// window.document.$5 = function (){
//      console.log("this is $5 in window document object")
// }
// $5();
// document.$5();

// 第九题  1

// ;(console.log(1000/function(){console.log("this is anonymous function "); return
// function(){return 2000/2}()}()))

// 第十题
//如何通过 __proto__ 获得getPrice的调用
// function orange(){
//      console.log("this is orange") 
//     }
//     orange.prototype= function (){ 
//     this.name = "张三", 
//     this.price= 20 
//     getPrice= function ()
//     {
//         return 2000
//     }()
//     console.log("this is function"+getPrice);
//  }
//  console.log(new orange().__proto__());


// 原型链

// console.log(nut.prototype.__proto__==Object.prototype); // true
// console.log(nut.prototype.__proto__.__proto__) // null

// 闭包
// function pear(){
//    var number=0;
//    return function(){
//        console.log(number++);
//    } 
// }
// var p1=pear()
// p1()
// p1()


// function pear2() {
//     var number=0;
//     console.log(number++);
    
// }
// pear2()   // 0
// pear2()  // 0
// pear2()  // 0
// pear2()  // 0