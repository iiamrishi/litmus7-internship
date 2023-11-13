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
  