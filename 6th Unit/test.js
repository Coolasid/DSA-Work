// let input = [1, 2, [3, 4, [5, 6, 7]], 8];

// const whatIsThisFunctionDoing = (arr) => {
//   let whatIsThis = [];

//   arr.forEach((item) => {
//     if (Array.isArray(item)) whatIsThis.push(...whatIsThisFunctionDoing(item));
//     else whatIsThis.push(item);
//   });
//   return whatIsThis;
// };

// console.log(whatIsThisFunctionDoing(input));


// printName("sid");

// var printName;

// function printName(name){
//   console.log(name);
// }

// printName = function(name){
//   console.log("hello",name);
// }


// console.log(typeof function(){});


// var x = 100;

// function alpha(){
//   var x = 200;

//   function beta(){
//     console.log(x);
//   }
//   return beta
// }

// var gama = alpha();
// gama()


// function alpha(){
//   var name = "masai";
//   console.log(this.name);
// }

// var name = "masai_school"

// alpha()




// foo()

// function foo(){
//   console.log("hello");
// }



// function getName(){
//   name = 'sid'
// }

// getName();
// console.log(name);


// function getYear(){
//   var year = new Date().getFullYear()

//   return year
// }
// getYear()
// console.log(year);


// console.log(name);
// name = "sid"



// const sum =  (x, y) =>{
//   x = x && 5;
//   y = y || 5
//   return x+y
// }
// console.log(sum(20, 5));


// var isAuth;
// console.log(isAuth);


// (function(){console.log("Sid")}());


// console.log(String);

// console.log(typeof []);


// const sum = (x, y) => {
//   x = x || 5;
//   y = y || 10;
//   return x + y;
// };
// console.log(sum(0, 10));


// function value(b){
//   const a= 100;
//   a = b;
//   return a
// }

// console.log(value(100));


// var arr = [1,2,3,4,5]

// arr.map(a->a*5)


// function getName(){
//   var statue = true;
//   if(statue){
//     const name = "sid"

//   }
//   console.log(name);
// }

// getName()

// arr = ["a", "b", "c", "d", "e"];
// const func = ([f, ...r]) => r.reduce((a, c) => a+c) + f
// console.log(func(arr));

// function alpha(){
//   var x = 100;
//   this.beta()
// }
// function beta(){
//   var x = 200;
//   console.log(this.x);
// }

// alpha()

// console.log([1] === [1]);


// name = x || "name";
// console.log(name);
// var x = "Masai"


// function cont(x){
//   var y = x*10;
//   function val(z){
//     console.log(x, y, z);
//   }
//   val(y*5);

// }
// cont(3)


// let fname = "sid";
// let lname = "patil";

// const person = {fname, lname}

// name = 'maesai'
// // var name;
// console.log(name);


// for(let i = 0; i <= 5; i++){
//   setTimeout(function asunc(){
//     console.log(i);
//   }, i*1000)
// }


// function sid(){
//   console.log(this);
// }

// sid()


// var arr = new Array(5).fill(0).map(function(a, b){return b+1})

// console.log(arr);


// const isAuth;
// console.log(isAuth);

// var str = "sid";
// var {length} = str

// console.log(length);

console.log("0" && "1");
console.log("0" || 1);