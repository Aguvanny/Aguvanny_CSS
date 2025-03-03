
// prompt("The right One ")

class student {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = [];
    }
addGrade(grade) {
    
    this.grades.push(grade);
}

getAverageGrade() {
    if (this.grades.length != 0 ) {
        const totalGrade = this.grades.reduce((gradeA, gradeB) => gradeA + gradeB, 0);
        return totalGrade / this.grades.length;
    }
return null

}

}


function createStudents() {


    //honour student 
    const studentA  = new student('Bayo', 27);
     studentA.addGrade(89)
     studentA.addGrade(97)
     studentA.addGrade(80)
     


     //average student
     const studentB  = new student('Bisi', 22);
     studentB.addGrade(61)
     studentB.addGrade(72)
     studentB.addGrade(70)
          
    //no grades 
    const studentC  = new student('Bolu', 26); 


    // return studentA.getAverageGrade()
    return [studentA, studentB, studentC];
}

const students = createStudents()

function printHonorRoll(students) {
    students.forEach(student => {

    const studentAverage = student.getAverageGrade();
        
    if (studentAverage === null) {
        console.log(student.name+" has no grades.");
    } else if (studentAverage >= 85) {
        console.log(student.name + " is an honor roll student");
    } else {
        console.log(student.name + " is not an honor roll student");
    }
     }); 
}

printHonorRoll(students)
