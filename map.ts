map keys to values. Maps record the order in which elements are inserted. 
It then replays that order when looping over keys, values or entries.

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

for (let entry of map.entries()) {
console.log(entry[0], entry[1]);
}
for (let [key, value] of map.entries()) {
console.log(key, value);
}
for (let [key, value] of map) {
console.log(key, value);
}
