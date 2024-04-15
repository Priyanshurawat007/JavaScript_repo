const myPromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve({username:"bsdk",password:"123"})
        }else{
            reject('Error:Something Went Wrong')
        }
    },2000)
    
})
myPromise.then((user)=>{
    console.log(user.username);
    // return user.username
})
// .then((username)=>{
//     console.log(username);
// }).catch(()=>{
//     console.log(console.error("Error"));
// })


