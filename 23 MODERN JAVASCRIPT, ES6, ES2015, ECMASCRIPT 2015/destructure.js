const person = {name: "Partho Rahman", age: 34, job: "Software Eng", wife: "Progga", address: "Uttara", phone: "01911127271", friends: ['Mushfiq', 'Setu', 'Masud']};
console.log(person.job);

const phone = person.phone;
console.log(phone);

const {address, wife, friends, salary} = person;
console.log(wife, address, friends, salary);

////////////////////////////////////////////////////////////

const arr = ["abc", "def", "ghi", "jkl", "mno", "pqr"];
const [x, y, z, ...xy] = arr;
console.log(x, y, z);
console.log(xy);

////////////////////////////////////////////////////////////

const complexObject = {
    home : "uttara",
    info : {
        roll: "ekhono hoi nai",
        registration: "on process"
    } 
}

const {registration} = complexObject.info;
console.log(registration);