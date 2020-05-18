import {Person} from '../models/Person';
import * as persondao from '../daos/person-dao';


export function getAllPerson(): Promise<Person[]> {
    return persondao.getAllPerson(); 
}

export function getPersonById(id: number): Promise<Person> {
    return persondao.getPersonById(id);
}