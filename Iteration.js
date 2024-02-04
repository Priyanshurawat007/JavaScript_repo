// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

for (let i = 0; i <= 10; i++) {
   console.log(`Outer Loop Value:${i}`);
   for (let j = 1 ; j <=10; j++) {
    console.log(i+'*'+j+'='+i*j);
    
   }
    
}