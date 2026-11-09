# Combining Union (|) and Intersection (&) Types in TypeScript

## introduction

In TypeScript, Union (|) and Intersection (&) are used to combine different types. Union (|) means OR, just like in JavaScript where a value can be this or another. Intersection (&) means AND, which combines multiple types together. We can use both of them together to create flexible and reusable object structures in our code.

## detail

1. Union Type (|)
   Union means a variable can hold one type OR another type. If we are not sure whether an ID will be a number or a string, we can use a Union type.

Example:  
```
          type ID = string | number;
            let userId: ID = 101;
let productId: ID = "p661";
```

2. Intersection Type (&)
   Intersection means combining multiple types into a single type. When we use it, the final object must have all the properties from both types, otherwise TypeScript will give an error.

Example:
```
type User = {
  name: string;
};

type Account = {
  email: string;
};

type UserAccount = User & Account;

const person: UserAccount = {
  name: "sachin",
  email: "sachin@gmail.com",
};
```
## combining Union (|) and Intersection (&)

In real projects, all users usually have some common information like id and name. But based on their role,  Admin or Customer will have different properties. We can easily handle this by combining Intersection (&) and Union (|).

Example-
```
// Common prop.
type BaseUser = {
  id: number;
  name: string;
};

// Admin prop.
type Admin = {
  role: "admin";
  canDeleteUser: boolean;
};

// Customer prop.
type Customer = {
  role: "customer";
  cartItems: number;
};

// Combining Union and Intersection
type AppUser = BaseUser & (Admin | Customer);
```
## Conclusion

1. Union (|) ---> We use it when a value can be one type OR another type.
2. Intersection (&) --> We use it when we want to combine multiple types into one.
3. Combining both --> We use & for common properties that everyone needs, and | for different properties based on specific roles or conditions.
