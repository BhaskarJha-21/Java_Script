function sayMyName(){
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("K");
    console.log("A");
    console.log("R");
}

//Reference:-
// sayMyName()

// function call/execute
// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
function addTwoNumbers(num1,num2){
    // let result = num1+num2
    // return result
    return num1 + num2
}
const result = addTwoNumbers(7,14)
// console.log("Result:",result);

function loginUserMessage(username="sam"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Bhaskar Jha"));
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1) {
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "Bhaskar",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArary) {
    return getArary[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));