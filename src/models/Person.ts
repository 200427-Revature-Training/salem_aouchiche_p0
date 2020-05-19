import { Address } from "./Address";


export class Person{
    id: number;
    firstName: string;
    lastName: string;
    email:string;
    pass:string;
    phone:number;
    personType:number; // 1 for student, 2 for professor. 
    addressId:Address;
  //  address_id: Address;
    constructor(id:number,firstName:string,lastName:string,email:string,pass:string,phone:number,personType:number,addressId:Address){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.pass=pass;
        this.phone=phone;
        this.personType=personType; 
        this.addressId=addressId;
    }

    /**
     * creating a Person instance according to database table.
     */
    static from(obj: personTable) {
        const person = new Person(
            obj.id, 
            obj.firstName,
            obj.lastName,
            obj.email,
            obj.pass,
            obj.phone,
            obj.personType,
            obj.addressId,
        );
        return Person;
    }
}

export interface personTable {
    id: number;
    firstName: string;
    lastName: string;
    email:string;
    pass:string;
    phone:number;
    personType:number;
    addressId:Address;
   
}