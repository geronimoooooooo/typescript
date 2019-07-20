# Declaration and initialization

```typescript
let name: string = "John";
color = 'red';
let isDone: boolean = false
let check = true;

let decimal: number = 6;
let floater: number = 6.6;

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

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

```


# Any 
https://www.typescriptlang.org/docs/handbook/basic-types.html#any
```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

