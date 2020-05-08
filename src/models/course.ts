export class Course{
    id:number;
    courseCode:string;
    courseName:string; 
    courseUnit:number;
    instructor:string;
    available : boolean; 

    

    constructor(id:number,courseCode:string,courseName:string,courseUnit:number,instructor:string,available : boolean ){
        this.id=id;
        this.courseCode=courseCode;
        this.courseName=courseName;
        this.courseUnit=courseUnit;
        this.instructor=instructor;
        this.available=available;
        
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
            obj.available,
        );
        return course;
    }
}

interface courseTable {
    id:number;
    courseCode:string;
    courseName:string; 
    courseUnit:number;
    instructor:string;
    available:boolean;
}