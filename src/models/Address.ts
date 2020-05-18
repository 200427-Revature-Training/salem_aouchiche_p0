

export class Address{
    id: number;
    street: string;
    city: string;
    state:string;
    zipcode:number;
     
    constructor(id:number,street:string,city:string,state:string,zipcode:number){
        this.id=id;
        this.street=street;
        this.city=city;
        this.state=state; 
        this.zipcode=zipcode;
        
    }

    /**
     * creating a Address instance according to database table.
     */
    static from(obj: addressTable) {
        const address = new Address(
            obj.id, 
            obj.street,
            obj.city,
            obj.state,
            obj.zipcode
        );
        return Address;
    }
}

export interface addressTable {
    id: number;
    street: string;
    city: string;
    state:string;
    email:string;
    pw:string;
    zipcode:number;
}