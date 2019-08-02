map keys to values.


let map = new Map();
map.set("A",1);
map.set("B",2);
map.set("C",3);

let map = new Map([
[ "A", 1 ],
[ "B", 2 ],
[ "C", 3 ]
]);

map.get("A");
// 1

for-of looping operator to loop over entries in a Map.

for (let key of map.keys()) {
console.log(key);
}
for (let value of map.values()) {
console.log(value);
}
