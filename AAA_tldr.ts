# Type assertions
https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions
<br>Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages.

```typescript
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;
```
###############################################################
Typescript has a concept of optional attributes/functions. These are denoted with a ? at the end like so:
interface MyInterface 
{
    mandatoryAttribute: string;
    optionalAttribute?: number;
    optionalFunction?: Function;
}
####################################################################################
```typescript
var num = 12 
console.log(typeof num);   //output: number
```
####################################################################################
Fields which do not require initialisation
public someUselessValue!: number;
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
####################################################################################
