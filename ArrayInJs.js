const MyArr=[1,2,3,4,5]
MyArr.push(6)   //It will add the given element at the last index
console.log(MyArr);
MyArr.pop()    //It will Delete the last element from the Array
console.log(MyArr);

console.log(MyArr.includes(9)); // it will show that the given idex is present in the index or not 
 
const MyA1=MyArr.slice(0,3)  // slice will  print the given index value expect the last one
console.log(MyA1);

const MyA2=MyArr.splice(0,3)  // Splice method will manipulate the Original Array
console.log(MyA2);
console.log(MyArr);

