// function foo(){
//     console.log("Fool");
// }
// doSomething(function foo() {
//     console.log("Fool!");
    
// },};

// (function () {
//     console.log("Fool");
    
// })();
// void function () {
//     console.log("Fool!");
    
// }();
// const object1 = {
//     property1: 42,
//   };
  
//   const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
  
//   console.log(descriptor1.configurable);
//   // Expected output: true
  
//   console.log(descriptor1.value);
//   // Expected output: 42

// const Devil={
//     property1:666,
// };
// const Access1=Object.getOwnPropertyDescriptor(Devil,'property1');

// console.log(Access1.configurable);
// console.log(Access1.enumerable);
// console.log(!Access1.writable);
// console.log(Access1.value);

function padZeros(num,totallen) {
    let strNum = num.toString();
    const numZeros=totallen-strNum.length;
    for(let i=1;i<=numZeros;i++){
        strNum=`0${strNum}`;
    }
    return strNum;
    
}
let result;
result1=padZeros(5,8);
result=padZeros(37,10);
console.log(result1);
console.log(result);