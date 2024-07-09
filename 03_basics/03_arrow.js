const user = {
    username: "bhaskar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);//{}->empty object aata h
// pr browser pe krne pe global object window object aata hai

// function chai() {
//     let username = "bhaskar"    
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "bhaskar"    
    // console.log(this.username);
// }

// arrow function
const chai = () => {
    let username = "bhaskar"    
    // console.log(this);
}


// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => ( num1 + num2 )

const addTwo = (num1,num2) => ({username: "bhaskar"})

console.log(addTwo(7,14))

// const myArray = [2,5,3,7,8]

// myArray.forEach(()=>{})