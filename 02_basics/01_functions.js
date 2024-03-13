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
console.log(LoginUser());