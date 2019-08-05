# Class
https://www.typescriptlang.org/docs/handbook/classes.html#classes

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

---------------------------

const fullNameMaxLength = 10;

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }
        
        this._fullName = newName;
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
#################################################################################

class Dog 
{
    _name: string = '[Animal]';

    get name(): string { console.log("Using name accessor"); return this._name; }
    set name(name: string) { console.log("Using name setter"); this._name = name; }

    constructor(name: string) {
        this._name = name;
    }

    sayName() {
        console.log("My name is " + this._name );
    }
}

var myDog: Dog = new Dog("Rover");
myDog.name = "Sally";
console.log("My dogs name is " + myDog.name);

/*Using name setter
Using name accessor
My dogs name is Sally*/


########################################################
Abstract Class
https://www.typescriptlang.org/docs/handbook/classes.html#abstract-classes

Unlike an interface, an abstract class may contain implementation details for its members. 
The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.
Abstract methods share a similar syntax to interface methods. Both define the signature of a method without including a method body. 
However, abstract methods must include the abstract keyword and may optionally include access modifiers.
