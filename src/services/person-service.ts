import {Person} from '../models/Person';
import * as persondao from '../daos/person-dao';


export function getAllPerson(): Promise<Person[]> {
    return persondao.getAllPerson(); 
}

export function getPersonById(id: number): Promise<Person> {
    return persondao.getPersonById(id);
}


export function savePerson(person: Person): Promise<Person> {

    // input new person from the user:
    const newPerson= new Person(
    undefined,
    person.firstName,
    person.lastName,
    person.email,
    person.pass,
    person.personType,
    person.phone,
    person.addressId
    );

    if(person.firstName && person.lastName && person.email &&  person.pass && person.personType,person.phone,person.addressId) {
        // submit to DAO
        return persondao.savePerson(newPerson); 

    } else {
        // TODO: We should fail here, probably issue some kind of 400
        return new Promise((resolve, reject) => reject(422));
    }
}