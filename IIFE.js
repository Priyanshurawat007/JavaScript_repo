// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`Hii This is Names IIFE`);
})(); //-> without the semicolon two IIFE can't get execute.

( (name) =>{
    console.log(`Unnamed IIFE ${name}`);
})('Devil');