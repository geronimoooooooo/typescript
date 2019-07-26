# Type assertions
https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions
<br>Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages.


let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;

###############################################################
Typescript has a concept of optional attributes/functions. These are denoted with a ? at the end like so:
interface MyInterface 
{
    mandatoryAttribute: string;
    optionalAttribute?: number;
    optionalFunction?: Function;
}
####################################################################################
var num = 12 
console.log(typeof num);   //output: number
####################################################################################
Fields which do not require initialisation
public someUselessValue!: number;

Alle number in TS sind floating point values.

  let finalValue = 'A string';
  if (typeof finalValue == 'string') {
    console.log('finalValue is a string');
  }

const userName = 'Robert';
const greeting = `Hello I'm ${userName}`;

// array destructering
  const testResults: number[] = [3.89, 2.99, 1.38];
  const [result1, result2, result3] = testResults;

  console.log(result1, result2, result3);

The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns.

Readonly bedeutet, dass das Field im Objekt nur bei der Erstellung editierbar ist.
