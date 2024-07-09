// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn="false"

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Bhaskar",
            lastName:"Jha"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        id:1,
        email:"bj@gmail.com"
    },
    {
        id:1,
        email:"bj@gmail.com"
    },
    {
        id:1,
        email:"bj@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Bhaskar"
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor:instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// REACT mein aise likhte h
// Destructure krte h prop.company ko {company} kra hai
// const navbar = ({company}) => {
// }
// navbar(company = "Bhaskar")


// {
//     "name": "Bhaskar",
//     "coursename":"js in hindi",
//     "price":"999"
// }

[
    {},
    {},
    {}
]