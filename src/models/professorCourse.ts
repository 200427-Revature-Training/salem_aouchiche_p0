import { Professor } from "./Professor";
import { Course } from "./Course";

export class ProfessorCourse{
 
    professorsId:Professor;
    coursesId:Course;

    constructor(professorsId:Professor,coursesId:Course){
    this.professorsId=professorsId;
    this.coursesId=coursesId;
        
    }

   /**
     * creating a Professor instance according to database table.
     */
    static from(obj: ProfessorCourseTable) {
        const professorCourse = new ProfessorCourse(
            obj.professorsId,
            obj.coursesId
        );
        return professorCourse;
    }
}

export interface ProfessorCourseTable{
    professorsId:Professor;
    coursesId:Course; 
}