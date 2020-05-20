import { Professor } from "./Professor";
import { Course } from "./Course";

export class ProfessorCourse{
 
    professors_id:Professor;
    courses_id:Course;

    constructor(professors_id:Professor,courses_id:Course){
    this.professors_id=professors_id;
    this.courses_id=courses_id;
        
    }

   /**
     * creating a Professor instance according to database table.
     */
    static from(obj: ProfessorCourseTable) {
        const professorCourse = new ProfessorCourse(
            obj.professors_id,
            obj.courses_id
        );
        return professorCourse;
    }
}

export interface ProfessorCourseTable{
    professors_id:Professor;
    courses_id:Course; 
}