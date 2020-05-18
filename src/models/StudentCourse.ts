import { Student } from "./Student"
import { Course } from "./Course"

export class StudentCourse{
 
    studentsId:Student;
    coursesId:Course;

    constructor(studentsId:Student,coursesId:Course){
    this.studentsId=studentsId;
    this.coursesId=coursesId;
        
    }

   /**
     * creating a student instance according to database table.
     */
    static from(obj: StudentCourseTable) {
        const studentCourse = new StudentCourse(
            obj.studentsId,
            obj.coursesId
        );
        return studentCourse;
    }
}

export interface StudentCourseTable{
    studentsId:Student;
    coursesId:Course; 
}