//import { Subject } from "./Subject";

export class Course{
    id:number;
    course_code:string;
    course_name:string; 
    course_unit:number;
    description:string;
    subjects_id:number


    constructor(course_code:string,course_name:string,course_unit:number,description:string,subjects_id:number){
        this.course_code=course_code;
        this.course_name=course_name;
        this.course_unit=course_unit;
        this.description=description;
        this.subjects_id=subjects_id;          
    }

    /**
     * creating a course instance according to database table.
     */
    static from(obj: courseTable) {
        const course = new Course(
            obj.course_code,
            obj.course_name,
            obj.course_unit,
            obj.description,
            obj.subjects_id
        );
        return course;
    }
}

export interface courseTable {
    id:number;
    course_code:string;
    course_name:string; 
    course_unit:number;
    description:string;
    subjects_id:number;
}