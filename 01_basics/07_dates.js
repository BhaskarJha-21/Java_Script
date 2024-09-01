// Dates

let myDate = new Date()
console.log(myDate.toString());//Sun Aug 18 2024 13:28:10 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString());//18/8/2024, 1:28:10 pm
console.log(myDate.toDateString());//Sun Aug 18 2024
console.log(myDate.toISOString());//2024-08-18T07:58:10.899Z
console.log(myDate.toJSON());//2024-08-18T07:58:10.899Z
console.log(myDate.toUTCString());//Sun, 18 Aug 2024 07:58:10 GMT
console.log(myDate.toLocaleTimeString());//2:11:08 pm
console.log(myDate.toTimeString());//14:20:54 GMT+0530 (India Standard Time)
console.log(typeof myDate);//Object

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