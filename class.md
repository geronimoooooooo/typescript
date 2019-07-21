# Class
https://www.typescriptlang.org/docs/handbook/classes.html#classes
```typescript
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
```

# Abstract Class
https://www.typescriptlang.org/docs/handbook/classes.html#abstract-classes

Unlike an interface, an abstract class may contain implementation details for its members. 
The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.
Abstract methods share a similar syntax to interface methods. Both define the signature of a method without including a method body. However, abstract methods must include the abstract keyword and may optionally include access modifiers
