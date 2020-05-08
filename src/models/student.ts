
export class Student{
    id: number;
    firstName: string;
    lastName: string;
    email:string;
    phone:number;
    schoolYear:number;

    constructor(id:number,firstName:string,lastName:string,email:string,phone:number,schoolYear:number){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.phone=phone;
        this.schoolYear=schoolYear;
    }

    /**
     * creating a student instance according to database table.
     */
    static from(obj: studentTable) {
        const student = new Student(
            obj.id, 
            obj.firstName,
            obj.lastName,
            obj.email,
            obj.phone,
            obj.schoolYear
        );
        return student;
    }
}

interface studentTable {
    id: number;
    firstName: string;
    lastName: string;
    email:string;
    phone:number;
    schoolYear:number;
}