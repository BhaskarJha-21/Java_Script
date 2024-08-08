//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id);//
console.log(typeof anotherId);

console.log(id === anotherId);

const bigNumber = 3456543576654356754n
// by adding n at the end changes it into bigInt
console.log(bigNumber);


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "bhaskar",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof scoreValue);//number
// console.log(typeof isLoggedIn);//boolean
// console.log(typeof outsideTemp);//object
// console.log(typeof userEmail);//undefined
// console.log(typeof anotherId);//symbol
// console.log(typeof heros);//object=>array
// console.log(typeof myObj);//object=>object{whichever data type is used}
// console.log(typeof myFunction);//function or object function

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(Primitive),Heap (Non-Primitive)

// STACK
let myYoutubename = "bhaskardotcom"

let anothername = myYoutubename;

anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


// HEAP
let userOne = {
    email: "genius@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "bhaskar@google.com"

console.log(userOne.email);
console.log(userTwo.email);