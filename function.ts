# Functions

```typescript

function add (a: number, b: number): number {
  return a + b
}

function greeter(person: string) {
    return "Hello, " + person;
}

function add (a: number, b: number) { ... }

function handleCustomers(customers : Customer[]){ ... }

// Functions are first class citizens, support the lambda "fat arrow" syntax and
// use type inference

// The following are equivalent, the same signature will be inferred by the
// compiler, and same JavaScript will be emitted
let f1 = function (i: number): number { return i * i; }
// Return type inferred
let f2 = function (i: number) { return i * i; }
// "Fat arrow" syntax
let f3 = (i: number): number => { return i * i; }
// "Fat arrow" syntax with return type inferred
let f4 = (i: number) => { return i * i; }
// "Fat arrow" syntax with return type inferred, braceless means no return
// keyword needed
let f5 = (i: number) => i * i;

```
##########################################################
function disp_details(id:number,name:string,mail_id?:string) { 
   console.log("ID:", id); 
   console.log("Name",name); 
   
   if(mail_id!=undefined)  
   console.log("Email Id",mail_id); 
}
disp_details(123,"John");
disp_details(111,"mary","mary@xyz.com");
##########################################################
