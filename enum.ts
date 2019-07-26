// enum is read only
enum Color {GREEN, BLUE=4, RED}:
let c: Color = Color.BLUE;
console.log(c); //4
let farbe: string = Color[4];
console.log(farbe);//BLUE
let red: Color = Color.RED;
console.log(red); //5
