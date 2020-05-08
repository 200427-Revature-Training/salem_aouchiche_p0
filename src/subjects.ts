export class subject {
    id: number;
    subjectName: string;
    subjectCode: string; 

    constructor(id:number,subjectName:string,subjectCode: string){
        this.id=id;
        this.subjectName=subjectName;
        this.subjectCode=subjectCode;
    }

}

interface subjectTable{
    id: number;
    subjectName: string;
    subjectCode: string;     
}