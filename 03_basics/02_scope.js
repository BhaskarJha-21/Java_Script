// var c=300
let a=300

if(true){
    let a= 10
    const b= 20
    // var c= 30
    // var global scope ki tarah behave krta h isiliye let use krna chahiye
    // console.log("INNER:",a);
}

// for(let i=0;i<array.length;i++){
//     const element= array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);


// function one() {
//     const username = "Bhaskar"

//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }
    // console.log(website);

    // two()

// }

// one()

if (true) {
    const username = "bhaskar"
    if(username==="bhaskar"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++


console.log(addOne(5))

function addOne(num) {
    return num+1
}



addTwo(5)
const addTwo = function(num){
    return num+2
}

