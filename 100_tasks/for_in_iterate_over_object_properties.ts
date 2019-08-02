The for-in loop is designed for iterating over an objects properties, like so:
var obj = {a:1,b:2};
for (let prop in obj) {
console.log(prop);
}
// a
// b
