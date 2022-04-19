const students = [
    {id: 21, name: "Omor"},
    {id: 22, name: "Sani"},
    {id: 23, name: "Salman"},
    {id: 24, name: "Sah"}
]

// by using normal for loop
const output = [];

for (let i = 0; i < students.length; i++){
    const element = students[i];
    const result = element.name;
    output.push(result)
}

console.log("Finind name properties by for loop ");
console.log(output);

//by using maping short array function
const names = students.map( s => s.name);
const id = students.map ( s => s.id);
console.log("mapping name properties by short array function ");
console.log(names, id);
// filter short array function
const bigger = students.filter( s => s.id > 23);
console.log("Filter id properties by short array function ");
console.log(bigger);
// find short array function
const isThere = students.find( s => s.id < 23);
console.log("Find id properties by short array function ");
console.log(isThere);

