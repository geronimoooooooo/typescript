for (let i = 0; i < 10 ; i++) {

  
  // for..of statement
// iterate over the list of values on the object being iterated
let arrayOfAnyType = [1, "string", false];
for (const val of arrayOfAnyType) {
    console.log(val); // 1, "string", false
}

let list = [4, 5, 6];
for (const i of list) {
   console.log(i); // "4", "5", "6"
}

// for..in statement
// iterate over the list of keys on the object being iterated
for (const i in list) {
   console.log(i); // "0", "1", "2",
}
-----------------------------------------
The difference between for…of and for…in
https://imasters.com/development/the-difference-between-for-of-and-for-in/?trace=1519021197&source=single
  
const numbers = [1,2,3,4,5];
 for(let numbers of numbers) {
  console.log(number);
 }

// result: 1, 2, 3, 4, 5

const numbers = [1,2,3,4,5];
for(let number in number) {
 console.log(number);
}

// result: 0, 1, 2, 3, 4
  
  const House = {
 area: 1000,
 height: 7,
 floors: 2
}

for(let prop in House) {
 console.log(prop);
}

// Result
// area
// height
// floors
------------------------------
