class Parent{
    constructor(){
        this.fatherName="Schwerzenger"
    }

    getFullName(){
        return this.name + " "+ this.fatherName;
    }

}


class Child extends Parent{
    constructor(name){

        super();
        this.name=name;
    }

}

const baby=new Child ("Arnold");
const baby2=new Child ("Trent");

console.log(baby.getFullName());
console.log(baby2.getFullName());