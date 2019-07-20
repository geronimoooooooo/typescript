# Type assertions
https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions
<br>Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages.

```typescript
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;
```
