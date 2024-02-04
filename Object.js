const mySum=Symbol("key1")

const JSuser={
    name:"Priyanshu",
    "Full Name":"Priyanshu Rawat",
    [mySum]:"myKey1",
    age:19,
    location:"Patna, Bihar",
    Email:"priyanshurawcrj4@gmail.com",
    IsLoggedIn:false,
    LastLogin:["monday","saturday"]



}
console.log(JSuser.Email); //variable access by Dot notation
console.log(JSuser["Email"]); //Access by Regular method
JSuser.Email="priyanshukumarp.cse2021@dscet.ac.in"; //by using the dot notation we can change the value of the variable
console.log(JSuser);

//console.log(JSuser);
// Object.freeze(JSuser); //Now It become Immutable

//Create a Function for Greeting  

JSuser.greeting=function () {

    console.log(`Hello JSuser,${this["Full Name"]}`);
    
}
console.log(JSuser.greeting());
