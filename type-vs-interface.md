# core differences between type aliases and interface in TypeScript

## Introduction

- Interface in typescript is used for define the structure of an object, class or function on the other hand type aliases allows us to giving a custom name to any type, so it can be reused throughout code, both are helping us make our code more reuseable.

## detail comparison

### interface:

- An interface in TypeScript is used to define the structure of an object, class, or function by specifying
  the properties, methods, and their types that must be implemented, we can extend interface by using 'extends' keyword. we can marge interface by giving same nam.

#### example:
> > > interface User {
> > > name: string;
> > > email: string;
> > > password: string;
> > > }


> > > interface Admin extends User {admin:boolean;}


### Type Aliases:
- by using type alias we can give "custom name" to "any type" 

             example: 
               1.primitive alias:
                     type shonkha = number;
                     let a: shonkha= 20:
              2. union type alias:
                      
                      type arg = string | boolean | null;

               or
               example: type User ={
                name: string;
                age: number;
               }   
               const person: User={
                name:"sachin",
                age:21
               }    



### Conclusion:
   the core difference between interface and type alias
   1. we use interface for making the structure of an object or class --> we use type alias for giving "custom name" to "any type"
   2. the same named interface are automatically merge --> but the same named type are give error don't merge.
   3. by using interface we can't directly create primitive or union type ---> but we can create Primitive or Union type directly by using 'Type Alias' 