import { db } from './db';
import {Person, personTable } from '../models/Person';

// function with async/wait
export async function getAllPerson():Promise<Person[]> {
   // console.log('getAllPerson');
   const sql =`SELECT * FROM person;`; 
   /*
    const sql = `SELECT p.first_name, p.last_name, p.email, p.pass, p.phone, pt.person_type, a.street, a.city 
                    FROM person p 
                    join person_types pt on p.person_type_id = pt.id
                    left join addresses a on p.addresses_id = a.id
                    ` ;
                    */
    const result = await db.query<personTable>(sql,[]);
    return result.rows;
}

export async function getPersonById(personId: number): Promise<Person> {
    //console.log('getPersonById'); 
    const checkPersonExists: boolean = await PersonExists(personId);
   
    if (!checkPersonExists) {
        return undefined;
    }
    
    const sql =`SELECT * FROM person WHERE id = $1`;
    const result = await db.query<Person>(sql, [personId]);
    console.log(result.rows[0]); 
    return result.rows[0];
}

/*
    Function to check if a Person exists with a given ID
*/
export async function PersonExists(personId: number): Promise<boolean> {
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
export async function savePerson(person: Person): Promise<Person> {
    const sql = `INSERT INTO person(first_name, last_name, email, pass,phone,person_type,addresses_id) \
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const result= await db.query<Person>(sql, [
        person.first_name, 
        person.last_name,
        person.email,
        person.pass,
        person.person_type_id,
        person.phone,
        person.addresses_id
]);

return result.rows[0];  

}
