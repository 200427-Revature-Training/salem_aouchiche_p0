class courses{
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
}