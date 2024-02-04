const tinderUser=new Object(); //Singleton Obj
const FinderUser={
    id:7,
    name:"Rahul",
    email:"R@gmail.com"
}; //Literals Obj

//Object Combination

 const obj1={1:"a",2:"b"}
 const obj2={3:"a",4:"b"}

 const obj3=Object.assign({},obj1,obj2) //Combine Obj by  Assign Method 
 console.log(obj3);


 //Mostly of the time used method
 const obj4={...obj1,...obj2} //Spread Method

 console.log(obj4);

 console.log(Object.keys(FinderUser)); //it will return the Variables
 console.log(Object.values(FinderUser));
 console.log(Object.entries(FinderUser));  

 console.log(FinderUser.hasOwnProperty("name"));