export class Subject{
    id: number;
    subjects_name: string;

    constructor(id:number,subjects_name:string){
        this.id=id;
        this.subjects_name=subjects_name;
    }

   /**
     * creating a subject instance according to database table.
     */
    static from(obj: subjectTable) {
        const subject = new Subject(
            obj.id, 
            obj.subjects_name
        );
        return subject;
    }
}

export interface subjectTable{
    id: number;
    subjects_name: string;  
}