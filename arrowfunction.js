 let minPlacementAge = 22;
let minMarks = 45;
class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age = age;
        this.marks = marks;
    }
    setPlacementAge(minPlacementAge){
        return (minMarks)=>{
            if(this.marks>minMarks && this.age>minPlacementAge){
                console.log(`${this.name} is ready for placement`)
            }else{
                console.log(`${this.name} is not ready for placement`)
            }
        }
    }
}
let s1=new Student("pavan",25,89);
let s2=new Student("Reddy",24,87);
let s3=new Student("sam",23,97);
let s4=new Student("akash",22,67);
let s5=new Student("rohan",27,70);

s1.setPlacementAge(2)(25);
s2.setPlacementAge(24)(23);
s3.setPlacementAge(97)(24);
s4.setPlacementAge(45)(22);
s5.setPlacementAge(87)(30);
