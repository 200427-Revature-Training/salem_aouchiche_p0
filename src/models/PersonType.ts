
export class PersonType{
    id: number;
    person_type:string;

    constructor(person_type:string){
        this.person_type=person_type;    
    }

   /**
     * creating a Professor instance according to database table.
     */
    static from(obj: personTypeTable) {
        const personType = new PersonType(
        
            obj.person_type
            
        );
        return personType;
    }
}

export interface personTypeTable{
    id:number;
    person_type: string
}