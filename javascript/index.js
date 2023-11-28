
///prototype example

let arr=["rishi" ,"danush"];


let object={
    name:"rishi",
    city:"angamaly",
    getInfo: function(){
        console.log(this.name + "from"+ " "+this.city)
    }
    
}

let object2={
    //name:"danush",
}

//for demo only because it cause performance issue
//object2.__proto__= object;


////spread operator

let  num= {
    a:1,
    b:2,
    c:3,

}
let num2={...num}// this line take the values inside the object num rather than the whole object
num2.d=4;
console.log(num);
console.log(num2)


//example in array

let ar=[1,2,3,4,5];
let ar2=[...ar]

console.log(ar);
console.log(ar2);


///another one

let ab={
    a:1,
    b:2,
    c:3,
}

let ba={
    ...ab
}
console.log(ab===ba);//it is false because it is not same

////
let obj={
    a1:1,
    b1:2,
    c:"hello"
}
let obj2={
    a2:1,
    b2:2,
    c:"hi"
}
let objA={...obj,...obj2}
console.log(objA);


////
let array=[1,2,3,4,5]

let array2=[6,7,8,9]

let arrayA=[...array,...array2];//it concatinate the both arrays here
console.log(arrayA)

//shallow

let OB={
    A:1,
    B:2,
    C:{
        Name:"rishi",
        Age: "22"
    }

}
let OB1={...OB}
OB.D=25;//this value does not show in OB object because what is really doing is creating a copy so 
OB.C.Name= "danush"//the only reference is passing
console.log(OB,OB1);



////rest

function test(a,b,...rest){
    console.log(a,b,rest);
}
test(5,10,23,22,69);


///strict mode restrictions
'use strict';
foo = 12//use var , let or const to avoid error
console.log(foo)//it will getv error because variable should be defined in strict mode

//




