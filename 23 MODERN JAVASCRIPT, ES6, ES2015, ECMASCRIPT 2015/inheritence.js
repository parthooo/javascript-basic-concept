class Parent{
    constructor(){
        this.fatherName = "Rahman";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    // function weitting method inside class. its called "method"
    getFullName(){    
        return this.name + " " + this.fatherName;
    
    } 
}

const baby = new Child("Partho");
const baby2 = new Child("Suvo");


console.log(baby.getFullName());
console.log(baby2);