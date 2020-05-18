import {Student} from '../models/Student';
import * as studentsdao from '../daos/students-dao';


export function getAllStudents(): Promise<Student[]> {
    return studentsdao.getAllStudents();
}

export function getStudentById(id: number): Promise<Student> {
    return studentsdao.getStudentById(id);
}


/** 
 * diffrent function applies to student updates, insert, 
 */






