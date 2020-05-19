import { Person } from "./Person";

export class Student{
    id: number;
    persontype:number;
    personId:Person

    constructor(id:number,persontype:number,personId:Person){
        this.id=id;
        persontype=1;
        this.personId=personId;
    }

   /**
     * creating a student instance according to database table.
     */
    static from(obj: studentTable) {
        const student = new Student(
            obj.id, 
            obj.persontype,
            obj.personId
        );
        return student;
    }
}

export interface studentTable{
    id: number;
    persontype: number;
    personId:Person;  
}