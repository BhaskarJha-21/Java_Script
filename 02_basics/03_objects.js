// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser={
    name:"Bhaskar",
    "full name":"Bhaskar Jha",
    [mySym]:"mykey1",
    age:20,
    location:"Delhi",
    email:"bhaskar@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="Bhaskar@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="Bhaskar@microsoft.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user");
}
JsUser.greeting2=function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
