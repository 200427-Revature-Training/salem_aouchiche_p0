import {PersonType} from '../models/PersonType';
import * as personTypedao from '../daos/personType-dao';


export function getAllPersonType(): Promise<PersonType[]> {
    return personTypedao.getAllPersonType(); 
}

export function getPersonTypeById(id: number): Promise<PersonType> {
    return personTypedao.getPersonTypeById(id);
}


export function savePersonType(personType: PersonType): Promise<PersonType> {

    // input new person from the user:
    const newPersonType= new PersonType(
    personType.person_type
    );

    if(newPersonType.person_type) {
        // submit to DAO
        return personTypedao.savePersonType(newPersonType); 

    } else {
        //  issue some kind of 400
        return new Promise((resolve, reject) => reject(422));
    }
}
