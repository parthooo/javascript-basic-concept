function timeOut() {
    console.log("I will come after all digit come", 3);
}

console.log(1);
console.log(2);
setTimeout(timeOut);
setTimeout(function(){
    console.log("See you 4 second later", 33);
}, 4000);
setTimeout(()=>{
    console.log("wait for 4 second", 333);
}, 4000);

// setInterval(() => {
//     console.log("doing it bro", 999);
// }, 2000);
console.log(4);
console.log(5);
console.log(6);