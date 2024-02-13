 // #Primitives datatypes

//It having 7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTEMP=null

let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

const bigNumber=5476755872362n

//Reference type(non primitive)

//Array,objects,functions

const heroes=["shaktiman","nagraj","doga"];
let myObj={
    name:"Priti",
    age:21,
}

const myFunction=function(){

    console.log("Hello world");
}
console.log(typeof bigNumber);

//stack(primitive),Heap(non primitive)

let myname="PritiRajendraJadhav"

let anothername="CSE"
console.log(myname);
console.log(anothername);


let user1={
    email:"pritijadhav856@gmail.com",
    UPI:"priti@ybl"
}

let user2=user1
user2.email="prtijadhav03@gmail.com"

console.log(user1.email);
console.log(user2.email);
