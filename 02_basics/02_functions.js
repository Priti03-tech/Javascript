//Functions

// function addTwoNumbers(number1,number2)
// {
//     console.log(number1+number2);
// }
function addTwoNumbers(number1,number2)
{
    let result=number1+number2
    return result
    }
const result=addTwoNumbers(4,8) 
//console.log("Result:",result); 

function LoginUser(username)
{
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`
}

//console.log(LoginUser("Priti"));
//console.log(LoginUser());

function calculatePrice(val1,val2, ...num1){
    return num1
}

console.log(calculatePrice(100,200,300));

const user={
    username:"Priti",
    price:200
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray=[100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));