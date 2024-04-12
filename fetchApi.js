fetch('https://jsonplaceholder.typicode.com/posts')
.then(response =>{
    if(!response.ok){
         throw new Error('FileNotFound')
    }
    return response.json();
})
.then(data=>data.forEach(element => {
    console.log(element.userId);
}))
.catch(error=> console.log(error));
   

//Second Api Call 


fetch('MyApi.txt') //local File Calling
.then(response=>{
    return response.text();
})
.then(data=>console.log(data))

