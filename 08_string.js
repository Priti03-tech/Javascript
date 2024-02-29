const name="Priti"
const repoCount=2

//console.log(name+repoCount+"value");
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName=new String('Pritij')
console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,3);
console.log(anotherString);

const newStringOne="  priti  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://priti.com/priti%20jadhav"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'));

console.log(gameName.split('-'));