import { db } from './db';
import {Course, courseTable } from '../models/Course';

// function with async/wait
export async function getAllCourses():Promise<Course[]> {
   // console.log('getAllCourses');
    const sql = 'SELECT * FROM courses';
    const result = await db.query<courseTable>(sql,[]);
    return result.rows;
}

export async function getCourseById(courseId: number): Promise<Course> {
    //console.log('getCourseById'); 
    const checkCourseExists: boolean = await courseExists(courseId);
   
    if (!checkCourseExists) {
        return undefined;
    }
    
    const sql =`SELECT * FROM courses WHERE id = $1`;
    const result = await db.query<Course>(sql, [courseId]);
    console.log(result.rows[0]); 
    return result.rows[0];
}

/*
    Function to check if a Course exists with a given ID
*/
export async function courseExists(courseId: number): Promise<boolean> {
    const sql = `SELECT EXISTS(SELECT id FROM courses WHERE id = $1);`;
    const result = await db.query<Exists>(sql, [courseId]);
    return result.rows[0].exists;
}

interface Exists {
    exists: boolean;
}


