// Numbers, Strings & Booleans
let userAge: number = 25;
let userName: string = 'John';
let isOnline: boolean = true;

// Type Assignment & Type Inference
let inferredGreeting = 'Hello, the type is inferred here';

// Object Types
let user: {id: number, name: string} = {
    id: 1,
    name: 'John Doe'
};

// Nested Objects & Types
let userDetails: {
    data: {
        id: number;
        profile: { name: string, age: number };
    }
} = {
    data: {
        id: 1,
        profile: {
            name: 'John Doe',
            age: 30
        }
    }
};

// Arrays Types
let numberArray: number[] = [1, 2, 3];

// Tuples
let userTuple: [number, string, boolean] = [1, 'John', true];

// Enums
enum UserRole {Admin, User, Guest}
let userRole: UserRole = UserRole.User;

// The "any" Type
let anyVariable: any = 'It could be any type';

// Union Types
let userId: number | string = '12345';

// Literal Types
let paymentMethod: 'card' | 'cash' = 'card';

// Type Aliases / Custom Types
type UserId = number | string;
let myUserId: UserId = '67890';

// Type Aliases & Object Types
type UserProfile = { id: number, name: string };
let myProfile: UserProfile = { id: 1, name: 'Jane Doe' };

// Function Return Types & "void"
function printMessage(): void {
  console.log('This is a void function');
}

// Functions as Types
let printFunction: () => void = function() {
  console.log('This is a function as type');
};

// Function Types & Callbacks
function fetchData(userId: number, callback: (data: number) => void): void {
  // fetch data here then call callback
}

// The "unknown" Type
let unknownVariable: unknown = 'Unknown type';

// The "never" Type
function throwError(): never {
    throw new Error("This function never returns a value");
}
