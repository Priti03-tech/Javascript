const marvel_heroes=["thor","Ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);

// const allHeroes=marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);


const allNewHeeoes=[...marvel_heroes,...dc_heroes]

console.log(allNewHeeoes);

const another_arr=[1,2,3,[4,5,6],7,[8,9,[4,5]]]

const real_another_array=another_arr.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("PRITI"));
console.log(Array.from("PRITI"));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));