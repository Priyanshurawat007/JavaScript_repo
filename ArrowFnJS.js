// this ->datatype , refers the current context

// console.log(this);

// const user = () =>{
//     let username='devil'
//     console.log(this.username);
// }
// user()

const addtwo = (num1, num2) =>{
    return num1+num2

}
console.log(addtwo(2,5))

//new way of ArrowFn Declaration without curly braces 
const addtwo1 = (num3, num4) => (num3+num4)

console.log(addtwo1(5,5));