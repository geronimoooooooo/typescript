re-usable class

class A {}
class B {}

With generics we can dynamically generate a new type.

class Alphabet<T> {
  //content: any;
  content: T;
}

T... is the type variable.

let letter: Alphabet<A>;
let letter: Alphabet<B>;
