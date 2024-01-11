//Function -1
function sayMyName(){
    console.log("RAwat");
    console.log("King");
}
sayMyName()

//Function -2
function LoginUserAbout(username){
    // condition-> When there is no username
    if(!username){
        console.log("There is no User Plz Enter user name");
        return
    }
    return `${username} just logged in`

}
console.log(LoginUserAbout("Rawat"));

 //Function -3

 // Below code will never suffer from Undefined username, coz there is already a defined value present
function LoginUserAbout(username ="rawat"){
    // condition-> When there is no username
    if(!username){
        console.log("There is no User Plz Enter user name");
        return
    }
    return `${username} just logged in`

}
console.log(LoginUserAbout());

// Function- 4
 
function CalculateCartPrice(...no){

    return no

}
console.log(CalculateCartPrice(100,200,300,400,500,600));