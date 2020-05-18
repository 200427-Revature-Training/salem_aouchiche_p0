import { db } from './db';
import {Subject, subjectTable } from '../models/Subject';


// function with async/wait
export async function getAllSubjects():Promise<Subject[]> {

    const sql = 'SELECT * FROM subjects';
    const result = await db.query<subjectTable>(sql,[]);
    return result.rows;
}


export async function getSubjectById(subjectId: number): Promise<Subject> {
    const checkSubjectExists: boolean = await subjectExists(subjectId);
    if (!checkSubjectExists) {
        return undefined;
    }
    const sql = `SELECT * FROM subjects WHERE id = $1`;
    const result = await db.query<Subject>(sql, [subjectId]);
    return result.rows[0];

}

/*
    Function to check if a Course exists with a given ID
*/
export async function subjectExists(subjectId: number): Promise<boolean> {
    const sql = `SELECT EXISTS(SELECT id FROM subjects WHERE id = $1);`;
    const result = await db.query<Exists>(sql, [subjectId]);
    return result.rows[0].exists;
}

interface Exists {
    exists: boolean;
}


