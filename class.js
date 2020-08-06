class Student{
    constructor(sId , sName){
        this.id=sId;
        this.name=sName;
        this.school="shamsul hoq khan school and college"
    }

}

const student1=new Student(14, "Shuvo");
const student2=new Student(12, "Joya");
const student3=new Student(34, "Asif");

console.log(student1.id, student2.id,student3.id);