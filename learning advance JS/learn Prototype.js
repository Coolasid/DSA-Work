// // //function constructor

// function Person(name, job, yearOfBirth) {
//   this.name = name;
//   this.job = job;
//   this.yearOfBirth = yearOfBirth;
// }

// Person.prototype.calculateAge = function () {
//   console.log(`The currert age of ${this.name} is: ${2022 - this.yearOfBirth}`);
// };

// console.log(Person.prototype);

// let person1 = new Person('siddesh', 'Full Stack Web Developer', 2000);
// console.log(person1);

// let person2 = new Person('patil', 'asdf', 2001);
// console.log(person2);

// person1.calculateAge();
// person2.calculateAge();

// // object person
// let person = {
//   talk: true,
//   Canfly() {
//     return "Sorry, Can't fly";
//   },
// };
// // Object GFGuser
// let GFGuser = {
//   CanCode: true,
//   CanCook() {
//     return "Can't say";
//   },

//   //  Inheriting the properties and methods of person
//   __proto__: person,
// };

// // Printing on console
// // Property of person
// console.log('Can a GFG User talk: ' + GFGuser.talk);

// // Method of person
// console.log('Can a GFG User fly: ' + GFGuser.Canfly());

// // Property of GFGuser
// console.log('Can a GFG User code: ' + GFGuser.CanCode);

// // Method of GFGuser
// console.log('Can a GFG User cook: ' + GFGuser.CanCook());




sid()


function sid(){
    console.log("sid");
}

let patil = () =>{
    console.log("patil");
}
patil()

let b = function(){
    console.log("b");
}

b()

// const equal = Symbol("foo") === Symbol("foo");
// console.log(equal);
