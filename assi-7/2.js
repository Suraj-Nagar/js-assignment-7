class Student {
    constructor(name, studentId) {
        this.name = name;
        this.studentId = studentId;
        this.courses = [];
    }

    enroll(course) {
        this.courses.push(course);
        console.log(`${this.name} has enrolled in ${course}.`);
    }

    displayCourses() {
        console.log(`${this.name}'s enrolled courses: ${this.courses.join(', ')}`);
    }
}

class Admission {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
        console.log(`${student.name} has been enrolled.`);
    }

    assignCourse(studentId, course) {
        const student = this.students.find(s => s.studentId === studentId);
        if (student) {
            student.enroll(course);
        } else {
            console.log(`Student with ID: ${studentId} not found.`);
        }
    }

    displayStudents() {
        console.log('Enrolled students:');
        this.students.forEach(student => {
            console.log(`${student.name} (ID: ${student.studentId})`);
        });
    }
}

// Example usage
const admission = new Admission();

const student1 = new Student('Mithum', 'mithium@pw.live');
const student2 = new Student('Farman', 'farman@pw.live');

admission.addStudent(student1);
admission.addStudent(student2);

admission.assignCourse('mithium@pw.live', 'Full Stack Web Development');
admission.assignCourse('farman@pw.live', 'Data Science Masters');

student1.displayCourses();
student2.displayCourses();

admission.displayStudents();
