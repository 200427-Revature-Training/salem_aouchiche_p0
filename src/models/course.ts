import { Subject } from "./Subject";

export class Course{
    id:number;
    courseCode:string;
    courseName:string; 
    courseUnit:number;
    desciption:string;
    subjectsId:Subject;


    constructor(id:number,courseCode:string,courseName:string,courseUnit:number,desciption:string,subjectsId:Subject){
        this.id=id;
        this.courseCode=courseCode;
        this.courseName=courseName;
        this.courseUnit=courseUnit;
        this.desciption=desciption;
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
            obj.desciption,
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
    desciption:string;
    subjectsId:Subject;
}