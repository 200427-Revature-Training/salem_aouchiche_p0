import { db } from './db';
import {Person, personTable } from '../models/Person';

// function with async/wait
export async function getAllPerson():Promise<Person[]> {
   // console.log('getAllPerson');
    const sql = 'SELECT * FROM person';
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


