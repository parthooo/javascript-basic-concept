const numbers = [1,2,3,4,5,6,7];
const output = [];
for (let i = 0; i < numbers.length; i++){
     const element = numbers[i];
     const result = element * element;
     output.push(result);
 }
 console.log("first task: ");
 console.log(output);

 ////////////////////////////////////////////////

// Map

const numbers1 = [1,2,3,4,5,6,7];
numbers1.map(function(element, index, array){
    console.log("second task: Mapping -> element, index, array");
    console.log(element, index, array);
})

const x = [1,2,3,4,5,6,7];

x.map(function(a, b, c){
    console.log("Third task: Mapping - element, index, array");
    console.log(a, b, c);
})

 ////////////////////////////////////////////////
 

 const numbers2 = [1,2,3,4,5,6,7];

 const result = numbers2.map(function(element){
    return element * element;
 })
 console.log("fourth task: Mapping Square");
 console.log(result);

////////////////////////////////////////////////

// below three function are same . 

// 1 is full wriiten function
 function square(element){
    return element * element;
 }
// 2 is array function
 const square1 = element => element * element;
// 3 is short array function
 const square2 = a => a * a; 

////////////////////////////////////////////////

const numbers3 = [1,2,3,4,5,6,7];

const result2 = numbers3.map( a => a * a )
console.log("fifth task: Mapping square short array function");
console.log(result2);

////////////////////////////////////////////////

// filter

const num = [1,2,3,4,5,6,7];

const bigger = num.filter( x => x > 4);
console.log("sixth task: filter");
console.log(bigger);

// find
const isThere = num.find( x => x > 4);
console.log("seventh task: Find");
console.log(isThere);