// array
var [x, y, ...remaining] = [1, 2, 3, 4];
console.log(x, y, remaining); // 1, 2, [3,4]

let [first, ...rest] = [1, 2, 3, 4]; 
console.log(first); // outputs 1 
console.log(rest); // outputs [ 2, 3, 4 ]


// object
let { a, b }: { a: string, b: number } = o;


################################################
spread ...
The spread operator is the opposite of destructuring. It allows you to spread an array into another array, or an object into another object.

let first = [1, 2];
let second = [3, 4]; 
let bothPlus = [0, ...first, ...second, 5]; 
This gives bothPlus the value [0, 1, 2, 3, 4, 5]. Spreading creates a shallow copy of first and second. They are not changed by the spread.

//object
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
###############################

Destructuring is a way of extracting values into variables from data stored in objects and arrays.
const obj = {first: 'Asim', last: 'Hussain', age: 39 };
const {first: f, last: l} = obj;
console.log(f); // Asim
console.log(l); // Hussain

const {first: f} = obj; translates to extract the property first and store in aconstant called f.
const {first, last} = obj;


Array destructuring works in a similar way except it extracts based of the index in the array, like so:
const arr = ['a', 'b'];
const [x, y] = arr;
console.log(x); // a
console.log(y); // b
