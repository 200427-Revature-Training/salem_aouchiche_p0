import { Person } from "./Person";

export class Professor{
    id: number;
    persontype:number;
    personId:Person

    constructor(id:number,persontype:number,personId:Person){
        this.id=id;
        persontype=2;
        this.personId=personId;
    }

   /**
     * creating a Professor instance according to database table.
     */
    static from(obj: professorTable) {
        const professor = new Professor(
            obj.id, 
            obj.persontype,
            obj.personId
        );
        return professor;
    }
}

export interface professorTable{
    id: number;
    persontype: number;
    personId:Person;  
}