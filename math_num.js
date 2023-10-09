const num=1254;  //it is a constant value
console.log(num);//Print the particular output
const num2=1000.97865// another constant value

console.log(num.toFixed(2));//it will fixed the value in 2 digit decimal point
console.log(num2.toPrecision);//it will show the type of the value
console.log(Math.round(num2));//it will round figure the value of the constant
console.log(Math.floor(num2));//it will show the least value for the constant
console.log(Math.ceil(num2));//it will show the upper value for the constant 
console.log(Math.random()*10+1);//it will print a random value for the math works


//This code will show at least value as above 10
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);