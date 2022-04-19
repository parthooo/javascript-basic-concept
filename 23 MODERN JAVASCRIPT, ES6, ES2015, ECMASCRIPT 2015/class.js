class Student{
    constructor(sId, sName){
        this.sId = sId;
        this.name = sName;
        this.school = "Uttara High School"
    }
}

const student1 = new Student(001, "suvo");
const student2 = new Student(002, "mahiya");
console.log(student1, student2);