//singleton

//object literals
const mySym=Symbol("Key1")

const Juser={
    name:"Priti",
    [mySym]:"myKey1",
    age:20,
    location:"Karad",
    isLoggedIn:false,
    email:"pritijadhav856@gmail.com",
    lastLoginDay:["Monday","Saturday"]
}


console.log(Juser["email"]);
console.log(Juser[mySym]);
Juser.email="pritijadhav03@gmail.com"
//Object.freeze(Juser);
Juser.email="prijadhav03@gmail.com"

console.log(Juser);

Juser.greeting=function(){
    console.log("Hello Juser");
}

Juser.greetingTwo=function(){
    console.log(`Hello Juser,${this.name}`);
}

console.log(Juser.greeting());
console.log(Juser.greetingTwo());
