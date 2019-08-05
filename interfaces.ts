 interface that describes objects.
 man muss nicht das implements nutzen. objekt muss einfach der struktur entsprechen.
 
 interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };
