import {Student} from '../models/Student';
import * as studentsdao from '../daos/students-dao';


export function getAllStudents(): Promise<Student[]> {
    return studentsdao.getAllStudents();
}

export function getStudentById(id: number): Promise<Student> {
    return studentsdao.getStudentById(id);
}


export function saveStudent(student: Student): Promise<Student> {

    // input new Student from the user:
    const newStudent= new Student(
        undefined, // id is auto defined 
        student.persontype,          // 1 for student and 2 for professor.
        student.personId
    );

    if(student.personId && student.persontype==1) {
        // submit to DAO
        return studentsdao.saveStudent(newStudent); 

    } else {
        // TODO: We should fail here, probably issue some kind of 400
        return new Promise((resolve, reject) => reject(422));
    }
}






