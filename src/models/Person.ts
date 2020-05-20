import { Address } from "./Address";


//first_name, last_name, email, pass,phone,person_type,addresses_id
export class Person{

    id: number;
    first_name: string;
    last_name: string;
    email:string;
    pass:string;
    phone:number;
    person_type_id:number; // 1 for student, 2 for professor. 
    addresses_id:number;
  //  address_id: Address;
    constructor(first_name:string,last_name:string,email:string,pass:string,phone:number,person_type_id:number,addresses_id:number){
        this.first_name=first_name;
        this.last_name=last_name;
        this.email=email;
        this.pass=pass;
        this.phone=phone;
        this.person_type_id=person_type_id; 
        this.addresses_id=addresses_id;
    }

    /**
     * creating a Person instance according to database table.
     */
    static from(obj: personTable) {
        const person = new Person(
            obj.first_name,
            obj.last_name,
            obj.email,
            obj.pass,
            obj.phone,
            obj.person_type_id,
            obj.addresses_id,
        );
        return Person;
    }
}

export interface personTable {
    id: number;
    first_name: string;
    last_name: string;
    email:string;
    pass:string;
    phone:number;
    person_type_id:number;
    addresses_id:number;
   
}