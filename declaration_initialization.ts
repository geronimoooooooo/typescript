# Declaration and initialization


let name: string = "John";
color = 'red';
let isDone: boolean = false
let check = true;
let someObj:     object    = { prop: 'woohoo' }; // non-primitive

let decimal: number = 6;
let floater: number = 6.6;

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }`.

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

//If your array can hold two different types of objects you can do either of the following:
var customers: Array<Customer | ExtendedCustomer>;
var customers: (Customer | ExtendedCustomer)[];
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


