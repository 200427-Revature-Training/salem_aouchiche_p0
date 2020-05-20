import { Student } from "./Student"
import { Course } from "./Course"

export class StudentCourse{
 
    students_id:Student;
    courses_id:Course;

    constructor(students_id:Student,courses_id:Course){
    this.students_id=students_id;
    this.courses_id=courses_id;
        
    }

   /**
     * creating a student instance according to database table.
     */
    static from(obj: StudentCourseTable) {
        const studentCourse = new StudentCourse(
            obj.students_id,
            obj.courses_id
        );
        return studentCourse;
    }
}

export interface StudentCourseTable{
    students_id:Student;
    courses_id:Course; 
}