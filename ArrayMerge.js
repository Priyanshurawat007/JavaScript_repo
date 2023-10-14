const MarvelHeros=["Ironman","Antman","CaptainAmerica"]
const DCHeros=["Batman","Superman","Aquaman"]


console.log(MarvelHeros);
console.log(DCHeros);
const  AllHeros=[...MarvelHeros, ...DCHeros]   //Spread Method in JS for combining multiple array
console.log(AllHeros);


const NewArray=[1,2,3,[4,5,6],[7,8,9],10]
console.log(NewArray.flat(Infinity));  // Flat method will return a new continue Array with continuos elements

console.log(Array.isArray("Hitesh")); //it will return the boolean value 

console.log(Array.from("Hitesh")); //it will Spread all the element of the string into separate array