// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);//Object

// let myCreatedDate = new Date(2024,0,23)
// let myCreatedDate = new Date(2024,0,23,5,0)
// let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp =  Date.now()

// console.log(myTimeStamp);//miliseconds mein
// console.log(myCreatedDate.getTime());//miliseconds mein
// console.log(Math.floor(Date.now()/1000));//seconds mein


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.toLocaleString());

newDate.toLocaleString('default',{
    weekday:"long"
})