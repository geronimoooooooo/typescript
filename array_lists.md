# Array
```typescript
let list: number[] = [1, 2, 3];
let cards: string[] = ['Visa', 'Maste­rCa­rd'];

`The second way uses a generic array type, Array<elemType>:`
let list: Array<number> = [1, 2, 3];

//If your array can hold two different types of objects you can do either of the following:
var customers: Array<Customer | ExtendedCustomer>;
var customers: (Customer | ExtendedCustomer)[];

// array, written two ways
let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

// tuple -- similar to array, but you can specify the types of the contents
let tuple: [string, number] = ['hello', 23];
```


# Tuple
Tuple types allow you to express an array with a fixed number of elements whose types are known, 
but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error

console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'

x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.
console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'.

let tuple: [number, string, boolean] = [7, "hello", true];
let [a, b, c] = tuple; // a: number, b: string, c: boolean
