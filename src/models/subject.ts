export class Subject{
    id: number;
    subjectName: string;
    subjectCode: string; 

    constructor(id:number,subjectName:string,subjectCode: string){
        this.id=id;
        this.subjectName=subjectName;
        this.subjectCode=subjectCode;
    }

   /**
     * creating a subject instance according to database table.
     */
    static from(obj: subjectTable) {
        const subject = new Subject(
            obj.id, 
            obj.subjectName,
            obj.subjectCode
        );
        return subject;
    }
}

interface subjectTable{
    id: number;
    subjectName: string;
    subjectCode: string;     
}