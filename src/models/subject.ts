export class Subject{
    id: number;
    subjectName: string;

    constructor(id:number,subjectName:string){
        this.id=id;
        this.subjectName=subjectName;
    }

   /**
     * creating a subject instance according to database table.
     */
    static from(obj: subjectTable) {
        const subject = new Subject(
            obj.id, 
            obj.subjectName
        );
        return subject;
    }
}

export interface subjectTable{
    id: number;
    subjectName: string;  
}