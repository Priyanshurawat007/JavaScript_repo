const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); 

myDate.getYear = function () {
  console.log("something else!");
};

myDate.getYear();