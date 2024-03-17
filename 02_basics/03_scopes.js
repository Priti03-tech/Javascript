//Scopes

// let a=10
// const b=20
// var c=30
let a=300

if(true){
    let a=10
    const b=20
    var c=30
}

// console.log(a);
// console.log(b);
//console.log(c);

function one(){
    const username="Priti"

    function two(){
        const website="youtube"
        console.log(username);
    }
   // console.log(website);

    two()

}

//one()

if(true){
    const username="Priti"
    if(username==="Priti"){
        const website=" youtube"
       // console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);


//+++++++++++Interesting concept+++++++++++++

function addone(num){
    return num+1
}

addone(5)
//addTwo(5)
const addTwo=function(num){
    return num+2
}

console.log(addTwo(5))