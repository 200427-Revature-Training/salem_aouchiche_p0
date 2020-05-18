import { db } from '../daos/db';
import {Student, studentTable } from '../models/Student';


export async function getAllStudents():Promise<Student[]> {

    const sql = 'SELECT * FROM students';

    const result = await db.query<studentTable>(sql,[]);

    console.log("test getAllStudents(): "+result.rows); 
    return result.rows;
}

/**
 * get student by id
 * @param studentId 
 */
 export async function getStudentById(studentId: number): Promise<Student> {
    const userExists: boolean = await studentExists(studentId);
    if (!userExists) {
        return undefined;
    }
    const sql = 'SELECT * FROM students WHERE id = $1';

    const result = await db.query<Student>(sql, [studentId]);
    return result.rows[0];

}

/*
    Function to check if a user exists with a given ID
*/
export async function studentExists(studentId: number): Promise<boolean> {
    const sql = `SELECT EXISTS(SELECT id FROM students WHERE id = $1);`;
    const result = await db.query<Exists>(sql, [studentId]);
    return result.rows[0].exists;
}


interface Exists {
    exists: boolean;
}