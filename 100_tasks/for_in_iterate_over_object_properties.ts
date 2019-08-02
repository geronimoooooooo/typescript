The for-in loop is designed for iterating over an objects properties, like so:
var obj = {a:1,b:2};
for (let prop in obj) {
console.log(prop);
}
// a
// b

let array = [10,20,30];
for (let index in array) {
console.log(index);
});
// 0
// 1
// 2

let array = [10,20,30];
for (let index in array) {
console.log(typeof(index));
};
// string
// string
// string
