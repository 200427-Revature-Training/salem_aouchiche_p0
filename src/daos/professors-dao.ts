import { db } from '../daos/db';
import {Professor, professorTable } from '../models/Professor';


export async function getAllProfessors():Promise<Professor[]> {

    const sql = 'SELECT * FROM professors';

    const result = await db.query<professorTable>(sql,[]);

    console.log("test getAllProfessors(): "+result.rows); 
    return result.rows;
}


 export async function getProfessorById(professorId: number): Promise<Professor> {
    const userExists: boolean = await professorExists(professorId);
    if (!userExists) {
        return undefined;
    }
    const sql = 'SELECT * FROM professors WHERE id = $1';

    const result = await db.query<Professor>(sql, [professorId]);
    return result.rows[0];

}

/*
    Function to check if a user exists with a given ID
*/
export async function professorExists(professorId: number): Promise<boolean> {
    const sql = `SELECT EXISTS(SELECT id FROM professors WHERE id = $1);`;
    const result = await db.query<Exists>(sql, [professorId]);
    return result.rows[0].exists;
}


interface Exists {
    exists: boolean;
}