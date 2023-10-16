const key=Symbol("Mykey")

const User1={
    name: "Priyanshu Rawat",
    age:18,   //Right Way of Defining Symbol Object
    email:"priyanshurawat@gmail.com",
    [key]:"King",
    IsLoggedIn:false,
    LoggedInDay:['mon','tue']
    
}

console.log(User1["name"]);
console.log(User1["age"]);
console.log(typeof User1 [key]);  //Right Way of Accessing Symbol Object
console.log(User1["IsLoggedIn"]);
console.log(User1["LoggedInDay"]);


Object.freeze(User1) // It Will Freeze the Content of the Variable User1, Means it will remain Unchanged


// All The Below Declaration will not executed bcoz of Freeze Object Method
User1.name="Vipul Rawat"
User1.email="priyanshukumarp.cse2021@dscet.ac.in"
console.log(User1["email"]);
console.log(User1["name"]);