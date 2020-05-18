import { Subject } from "./Subject";

export class Course{
    id:number;
    courseCode:string;
    courseName:string; 
    courseUnit:number;
    instructor:string;
    subjectsId:Subject;


    constructor(id:number,courseCode:string,courseName:string,courseUnit:number,instructor:string,subjectsId:Subject){
        this.id=id;
        this.courseCode=courseCode;
        this.courseName=courseName;
        this.courseUnit=courseUnit;
        this.instructor=instructor;
        this.subjectsId=subjectsId;          
    }

    /**
     * creating a course instance according to database table.
     */
    static from(obj: courseTable) {
        const course = new Course(
            obj.id, 
            obj.courseCode,
            obj.courseName,
            obj.courseUnit,
            obj.instructor,
            obj.subjectsId
        );
        return course;
    }
}

export interface courseTable {
    id:number;
    courseCode:string;
    courseName:string; 
    courseUnit:number;
    instructor:string;
    subjectsId:Subject;
}