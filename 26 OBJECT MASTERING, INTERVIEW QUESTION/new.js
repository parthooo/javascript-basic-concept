class Person {
    constructor (firstname, lastname, salary){
        this.firstname = firstname;
        this.lastname = lastname;
        this.salary = salary;
    }
}

const firstPerson = new Person('Partho', 'Rahman', 40000);
console.log(firstPerson);
const secondPerson = new Person('Wasek', 'Rahman', 10000);
console.log(secondPerson);

function Person1 (firstname, lastname, salary){
        this.firstname = firstname;
        this.lastname = lastname;
        this.salary = salary;
}

const firstPerson1 = new Person1('Bablu', 'Rahman', 40000);
console.log('function', firstPerson1);
const secondPerson1 = new Person1('Parvin', 'Rahman', 10000);
console.log('function', secondPerson1);