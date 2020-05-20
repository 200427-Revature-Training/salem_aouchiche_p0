import { db } from './db';
import {PersonType, personTypeTable } from '../models/PersonType';


// function with async/wait
export async function getAllPersonType():Promise<PersonType[]> {
   // console.log('getAllPerson');
    const sql = 'SELECT * FROM person_types';
    const result = await db.query<personTypeTable>(sql,[]);
    return result.rows;
}

export async function getPersonTypeById(person_type_id: number): Promise<PersonType> {
    //console.log('getPersonById'); 
    const checkPersonExists: boolean = await PersonTypeExists(person_type_id);
   
    if (!checkPersonExists) {
        return undefined;
    }
    
    const sql =`SELECT * FROM person_types WHERE id = $1`;
    const result = await db.query<PersonType>(sql, [person_type_id]);
    console.log(result.rows[0]); 
    return result.rows[0];
}

/*
    Function to check if a Person exists with a given ID
*/
export async function PersonTypeExists(personId: number): Promise<boolean> {
    const sql = `SELECT EXISTS(SELECT id FROM person WHERE id = $1);`;
    const result = await db.query<Exists>(sql, [personId]);
    return result.rows[0].exists;
}

interface Exists {
    exists: boolean;
}

/*
    function save new person  from user 
 */
export async function savePersonType(personType: PersonType): Promise<PersonType> {
    const sql = `INSERT INTO person(person_type) VALUES ($1) RETURNING *`;
    const result= await db.query<PersonType>(sql, [
        personType.person_type
]);

return result.rows[0];  

}
