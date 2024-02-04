
// // let greetings="Hello Bsdk!"
// // for (const Greet of greetings) {
// //     console.log(`Each Char is: ${Greet}`);
// // }


// //MAP
// const map=new Map()
// map.set('IN',"India")
// map.set("PAK","Pakistan")
// map.set("ENG","England")

// console.log(map);

// //Output in Value Form

// // for (const [key,value] of map) {
//     console.log(key,':-',value);

// // }

// // //Output in Array Form
// // for (const key of map) {
//     console.log(key);

// // }


// //Non Iterable -> Map 
// // for (const key in map) {
// //    console.log(key);
// //     }


 const coding=["js","ruby","C++","JAVA"]
//   coding.forEach(function (item) {
//     console.log(item);
//   })

// coding.forEach((item)=> {
//     console.log(item);
// })

coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
})

const MyCoding=[
    {
        languageName: "JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"Java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
]

MyCoding.forEach((item)=>{
    // console.log(`Item Is ${item.languageFileName}`);
})

//forEach return nothing 

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=>{
    // return num>4
// })
// console.log(newNums);

//videolength -25:00

const myNumbers=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNumbers.map((num)=>num *10).map((num)=>num+1).filter((num)=> num >= 40)
console.log(newNums);