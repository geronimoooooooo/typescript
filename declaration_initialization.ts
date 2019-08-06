# Declaration and initialization


let name: string = "John";
color = 'red';
let isDone: boolean = false
let check = true;
let someObj:     object    = { prop: 'woohoo' }; // non-primitive

let decimal: number = 6;
let floater: number = 6.6;

let fullName: string = `Bob Bobbington`;
let sentence: string = `Hello, my name is ${ fullName }`.

//any
  let myCar: any = 'BMW';
  console.log(myCar); // Prints: BMW

  myCar = { brand: 'BMW', series: 3 };
  console.log(myCar) // Prints: { brand: "BMW", series: 3 }

//tuples
const address: [string, number] = ["Street", 99];
 
// Use const keyword for constants
const numLivesForCat = 9;
numLivesForCat = 1; // Error

let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";

enum Color {Red, Green, Blue = 4}
let c: Color = Color.Green
const defaultColor: Color = Color.Red;

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
let [first] = [1, 2, 3, 4];
console.log(first); // outputs 1

// union
let myRealRealAge: number | string = 24;
myRealRealAge = '24';
// myRealRealAge = true // Not possible since myRealRealAge only accepts a number or a string.

//If your array can hold two different types of objects you can do either of the following:
var customers: Array<Customer | ExtendedCustomer>;
var customers: (Customer | ExtendedCustomer)[];

// Generics
class Audio {
}
class Video {
}
class Post<T> {
content: T;
}
let audioPost: Post<Audio>;
let videoPost: Post<Video>;
############################################################
greeting: string|number;
  constructor(message: string|number) {
      if(typeof message =="string"){
          console.log("str is string");
      }
            if(typeof message =="number"){
          console.log("str is number");
      }
    this.greeting = message;
  }
  



# Any 
https://www.typescriptlang.org/docs/handbook/basic-types.html#any

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean


// Objects are comprised of key-value pairs.
let userData: { name: string, age: number } = {
    name: 'Max',
    age: 27
  };
 userData = {
    name: 'Robert',
    age: 24
  };

