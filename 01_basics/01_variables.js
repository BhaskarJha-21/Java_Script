const accountId = 211229
let accountEmail = "bhaskar@google.com"
var c = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 //Not allowed

accountEmail = "genius@google.com"
accountPassword = "1211221"
accountCity = "Bengaluru"

// console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])