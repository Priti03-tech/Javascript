//Immediately Invoked Function Expression

//named iife
(function chai(){
    console.log(`DB CONNECTED`);
})();

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Priti')