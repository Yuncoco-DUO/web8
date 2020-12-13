function Pear(name,price,origin,weight){
    this.name=name,
    this.price=price,
    this.weight=weight,
    this.origin=origin;
    this.printName=function(){
        console.log("this is pear"+this.name);
    }
}
Pear.prototype.printName2=function(){
    console.log("this is printName 2");
}

var p1 = new Pear("一号梨子",12,"河南",10)
p1.printName()

var p2 = new Pear("二号梨子",132,"河南2",70)
p2.printName()

// p1.printName2()

console.log(p1.__proto__);
console.log(Pear.prototype);
console.log(p1.__proto__.__proto__.__proto__);
console.log(Pear.prototype.__proto__.__proto__);
// Pear.printName()
// Pear.printName2()