
class Students {
    id: number;
    firstName: string;
    lastName: string;
    email:string;
    phone:number;
    schoolYear:number;

    constructor(id:number,firstName:string,lastName:string,email:string,phone:number,schoolYear:number){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.phone=phone;
        this.schoolYear=schoolYear;
    }
}