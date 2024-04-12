//Interval  Function to call the api every second
function Dates() {
    let date=new Date().toLocaleString();
    console.log(date);
    
}
var interval=setInterval(Dates,1000)

setTimeout(() => {
    clearInterval(interval)
}, 10000);
