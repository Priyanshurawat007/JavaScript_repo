// {} -> Scope.

let a=100 //Global Scope Variable

if(true){
    let a=10
    const b=20
    console.log(a);  //inner Scope variable
}

console.log(a);

//if we use VAR in javascript it will spread out of the scope which may cause error...
// that's why it is suggested to not use the VAR data type.

//Nested Scope

function one(){
   const User="Devil"
    function two(){
        const website="Youtube"
        console.log(User);
    }
    two()
    // console.log(website); -> Since it is defined in inner scope function it can't be accessed by the global scope function. 
}
one()

// Scope ->3
function Addone(num){
    return num+1
}
console.log(Addone(7));

const addtwo=function (num){
    return num+2
}
console.log(addtwo(5));