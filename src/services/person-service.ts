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
    person.first_name, 
    person.last_name,
    person.email,
    person.pass,
    person.person_type_id,
    person.phone,
    person.addresses_id
    );

    if(newPerson.first_name && newPerson.last_name && newPerson.email &&  newPerson.pass && newPerson.person_type_id && newPerson.phone && newPerson.addresses_id) {
        // submit to DAO
        return persondao.savePerson(newPerson); 

    } else {
        //  issue some kind of 400
        return new Promise((resolve, reject) => reject(422));
    }
}