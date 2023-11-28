var a,b, sum;
var a= 10; b=10;
var sum= a+b;
console.log("sum  is ",sum);



//var, let, const

function test(){ 
    if (true){
    let x; 
    x=10;  
    
    }
    console.log(x);    
}

test();




var n=2;
function square (num){
    var ans = num *num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);








/////

var x=5;
a();
function a(){
    console.log(y);
    function c(){
        console.log(y);
        
    }
    console.log(x);

    var y=10;
        c();
}



function z(){
    var b=900;
    function x(){
        var a=7;
        function y(){
            console.log(a);

        }
        y();
    }
    x();
}
z();




////////////
if(false){
    var a=10;
    console.log(a);
}
function b(){
console.log(a);
var a=1;
}
console.log(b());








/* an example senario for closure is A Closure is used to extend functionality, 
for instance if a user clicks a button, we want something to happen on the screen, 
in that case, we would use a Closure where we pass the user event (a click) and then push data to the view.*/





//example for callback

// Function that simulates an asynchronous operation
function fetchData(callback) {
    setTimeout(function() {
        const data = "Hello, World!";
        callback(data); // Invoke the callback function with the data
    }, 2000); // Simulating a 2-second delay
}

// Function that uses fetchData with a callback
function processData() {
    let message = "Waiting for data...";

    // Call the fetchData function with a callback
    fetchData(function(data) {
        console.log("Data Received: " + data);
        message = data; // Update the message with the received data
    });

    // This log might execute before the data is received, demonstrating asynchronous behavior
    console.log("Message: " + message);
}

// Call the processData function
processData();

//definition of callback function

/*Any function that is passed as an argument to another function
 so that it can be executed in that other function is called as a callback function*/

 function mainFunction(callback) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function() {
      callback("Operation complete");
    }, 1000);
  }
   
  // Define the callback function
  function callbackFunction(result) {
    console.log("Result: " + result);
  }
   
  // Call the main function with the callback function
  mainFunction(callbackFunction);

















 //example for execution context 

let x = 'Hello World!';  
function a() {  
  console.log('It is the first function');  
function b() {  
  console.log('It is the second function');  
}  
b();  
}  
a();  
console.log('It is GEC');  


//another one
//in this one we have scope chain
a = 1;

var b = 2;

cFunc = function(e) {
  var c = 10;
  var d = 15;
  
  console.log(c);
  console.log(a); 
  
  function dFunc() {
    var f = 5;
    console.log(f)
    console.log(c);
    console.log(a); 
  }
  
  dFunc();
}

cFunc(10);



//here the value is given when invoking that function

function foo(a, b) {
    var c = a + b;
    console.log(c);
  }
  foo(2, 3);



//-------------------
  //in the case of let in block scope
  function x() {
    if (true) {
        let a = "hii";
        console.log(a); 
    }

 //console.log(a); // in the case of let it will be error
}

x();

//-----------------
//in the case of const in block scope
function a() {
    const a= "20";

    if (true) {//here if consider as a block
        const a = "10";
        console.log(a); // Output: "I am a different constant variable inside a block"
    }

    console.log(a); // Output: "I am a constant variable"
}

a();

//------------------
//function execution context with parameters

function add(a, b) {
    var result = a + b;
    return result;
}

var sum = add(5, 5);
console.log(sum);

//-------------------
//tricky code involving function scope

function trickyExample() {
    if (true) {
        var variableA = "I am inside if block";
        let variableB = "I am inside if block with let";
    }
    console.log(variableA); // Output: "I am inside if block"
   //console.log(variableB); // give error because of let
   }

trickyExample();


//--------------------

function trickyExample() {
    console.log(myVar); // 
    var myVar = 10;
    console.log(myVar); //
}

trickyExample();



////function statement or function declarion
//----------------------
function a(){
    console.log("hii")
}
a();


////function expression
//-----------------

var b = function(){ //here function act as a value
    console.log("hiii")
}
b();

///
function greet(name) {
    console.log("hi, " + name + "!");
}


greet("rishi");

//arrow function
var add = function(x, y) { //without arrow
    return x + y;
};

var arrow = (x, y) => x + y; //with arrow

console.log(add(5, 3));
console.log(arrow(5, 3));      

//iife 
//the function will imediatly invoke
(function () {
    console.log("iife");
})();


/* the ability of function to be used as values and 
can be passed as an argument to another function and can be returned from function*/


var b = function(fn){ 
    console.log("hiii")
    fn();
}
function sum(){
    console.log(sum)
}
b(sum);
  

//setTimeout simple example

function a(){
    setTimeout(function(){//this funtion create closure
        console.log(10);
    },2000);
    console.log("hii")//does not wait for setTimeout
}
a();


//another exampleof setTimeout to print number upto 5 

function a(){
    for(let i=1;i<=5;i++)
   setTimeout (function(){
   console.log(i);
   },i*2000);
}
   a();


// print same as above using var and without let

function a(){
    for(var i=1;i<=5;i++){
    function close(i){//wrap with this function to work this
   setTimeout (function(){
   console.log(i);
   },i*2000);
    }
   close (i);
    }
     
}
 a();
 


 //iife example


 for(var i=1;i<=5;i++)
{
    (function(i)
{
     setTimeout(function()
    {
        console.log(i);
        
    },i*1000);
})(i);
    
}


////
var flag=true;
setTimeout(function(){
    flag=false;
},5000);
while(flag)
{
    console.log("rishi")
}


///example for eventloop
console.log("hello")
  setTimeout(function(){
        console.log(10);
    },2000);
    console.log("hii")


//// "this" refers to the object that is responsible for exicuting function

/// an example of this

let user= {
    firstname : "rishiraj",
    lastname : "babu",
    fullname : function(){
        //console.log(this)
        console.log (this.firstname +" " +this.lastname);
    }
    
}
user.fullname();


////// another example of this


const user={
    name: "john",
    age: 25,
    career:{
        employer:"google",
        title: "developer",
        info(){
            console.log(this.name + " is a " + this.title +" at "+ this.employer);//print "undifiend is a developer at google"
        }//the reason is that this name refer to object career
        
    }

}
user.career.info();


//call in this

let name={
    firstname: "rishiraj",
    lastname: "babu",
    fullname: function(){
        console.log(this.firstname+ " "+this.lastname)
    }
    
}
name.fullname();

let name2={
    firstname: "rishi",
    lastname: "raj",
}
name.fullname.call(name2);


///bind
const myobj={
    a: 1,
    b:2,
    c: function(){
        console.log(this.a + this.b);
    }
    
}
myobj.c = myobj.c.bind(myobj);
var k= myobj.c;
k();


function user(){
    return {
        name: "rishi",
        function getname(){
            console.log(this.name)
        }
    }
}
const value= user.getname();



/////////////////////////
function user(){
    return {
        name: "rishi",
         getname(){
             return {
                 name: "danush", //does not print because arrow looks the parent fn
                  lastname:()=>{ //here uses name bcasue it refers to parent fn only in case of arrow fn
             console.log(this.name)
             }
             }
       
        }
    }
}

const value= user();
 const value2 = value.getname();
 (value2.lastname());




/// call, apply, bind

let name={
    firstname: "rishiraj",
    lastname: "babu",
   
    }
    let fullname = function(hometown, state){
        console.log(this.firstname+ " "+this.lastname+ " from "+hometown+" "+ state)
    
}
fullname.call(name,"angamaly","kerala");

let name2={
    firstname: "rishi",
    lastname: "raj",
}
fullname.call(name2,"kerala","india");
fullname.apply(name2,["kerala","india"]);// in apply we pass argument in array

//bind
let myfullname = fullname.bind(name2,"kerala","india");//it create a copy of fullname and bind that to name2 object and return a function
console.log(myfullname);
myfullname();


//simple example of bind
let name={
    firstname: "rishiraj",
    lastname: "babu",
   
    }
    let fullname = function(){
        console.log(this.firstname+ " "+this.lastname)
    
}
let myname= fullname.bind(name);
myname();



/////polyfill bind

let name={
    firstname:"rishiraj",
    lastname:"babu"
}

function fullname(city1, city2){
    console.log(this.firstname+" " + this.lastname+ " lives in "+city1+" ,"+city2);
}

Function.prototype.Mybind = function(obj,...args1){
      const fun = this;
    return function(...args2){
        return fun.apply(obj,[...args1,...args2]);
      
    }
}
const bindName = fullname.Mybind(name,"kerala");
bindName("india");


////filter()
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);//print words with greater than 6 length


//map()
const array1 = [1, 2, 3, 4];

const map1 = array1.map((x) => x * 2);

console.log(map1);//prints the multiplied value

///reduce
const number=[10,20,30];
const sum= number.reduce((total,num)=>{
    return total + num},0);
console.log(sum);


//slice
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Extracting elements from index 1 to 3 (exclusive)
const slicedFruits = fruits.slice(1, 4);

console.log(slicedFruits);//print banana,orange,grape


////////// filter()
const words =['spray', 'elite', 'exuberant', 'destruction', 'present'];
let obj={
    a:1,
    b:2,
    c:3,
    d:4,
    
    
}
let obj2={...obj,c:5,d:6
    
}
let obj3={
    ...obj,a:3,b:4
}
let obj4={
    ...obj,b:6,c:7
}

const arr=[obj,obj2,obj3,obj4]
const equalToOne= (object,index,rishi)=> {//equalToOne= callback fn
   console.log('this is ',object)
   console.log('this is index ',index)
   console.log('this is rishi',rishi)
    if(object.a===1)
     return true
     else
     return false
     
  
}
//console.log(equalToOne(obj3));
const re= arr.filter(equalToOne)
console.log(re)
//const sum =(word) => word.length > 6
//const result = words.filter(sum);
//console.log(result);//print words with greater than 6 length

