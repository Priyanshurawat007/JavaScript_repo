let myDate=new Date()  // The type of DATE in JS is OBJECT
console.log(myDate);
console.log("Time in Indian Standard");
console.log(myDate.toTimeString()); 
console.log("Time in Universal Time Coordinator");  // Month start with index 0 in JS
console.log(myDate.toUTCString());
console.log("Local System Date");
console.log(myDate.toLocaleDateString());
console.log("Local System Time");
console.log(myDate.toLocaleTimeString());

let myCreatedDate= new Date(2002,6,24,20,45)
console.log(myCreatedDate.toLocaleString());

let MyDateFormate=new Date("07-24-2004")  //in String month will be started from the index 1
console.log(MyDateFormate.toLocaleString());

console.log(MyDateFormate.getTime()+" in MilliSeconds");//values in MilliSeconds
console.log(Math.floor(Date.now()/1000)+" in Seconds"); // values in Seconds

