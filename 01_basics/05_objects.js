//const tinder=new Object()----------sigleton object
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Priti"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"sandhya@gmail.com",
    fullname:{
        userfullname:{
            firstname:" Priti",
            lastname:"Jadhav"
        }
    }
}

//console.log(regularUser);

const obj1 = {1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1, ...obj2}
//console.log(obj3);

const users=[
    {
        id:1,
        email:"pj@gmail.com"
    },
    {
        id:1,
        email:"pj@gmail.com"
    }, {
        id:1,
        email:"pj@gmail.com"
    }
]

users[1].email
//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

//course.courseInstructor

const {courseInstructor:Instructor}=course
console.log(Instructor);

